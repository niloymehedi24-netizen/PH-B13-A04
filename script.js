let interviewList = [];
let rejectedList = [];

let allCount = document.getElementById("totalCount");
let allInterview = document.getElementById("interviewCount");
let allRejected = document.getElementById("rejectedCount");

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

const allJobSection = document.getElementById("allJobs");
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');

function totalJobCount(){
    allCount.innerText = allJobSection.children.length;
    allInterview.innerText = interviewList.length;
    allRejected.innerText = rejectedList.length;
}

totalJobCount();

function toggleStyle(id){

    // removing blue bg for all button if there is any
    allBtn.classList.remove('bg-[#3B82F6]', 'text-[#ffffff]');
    interviewBtn.classList.remove('bg-[#3B82F6]', 'text-[#ffffff]');
    rejectedBtn.classList.remove('bg-[#3B82F6]', 'text-[#ffffff]');

    // adding white bg for all button
    allBtn.classList.add('bg-[#ffffff]', 'text-[#3B82F6]');
    interviewBtn.classList.add('bg-[#ffffff]', 'text-[#3B82F6]');
    rejectedBtn.classList.add('bg-[#ffffff]', 'text-[#3B82F6]');

    const selected = document.getElementById(id);

    // adding blue bg for current button
    selected.classList.remove('bg-[#ffffff]', 'text-[#3B82F6]')
    selected.classList.add('bg-[#3B82F6]', 'text-[#ffffff]')

    if(id == 'interview-btn'){
        allJobSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }
    else if(id == 'all-btn'){
        allJobSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
}

mainContainer.addEventListener('click', function(event){

    console.log(event.target.classList.contains('btn-interview'));
    
    if(event.target.classList.contains('btn-interview')){

        const parentNode = event.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.job-name').innerText;
        const jobRole = parentNode.querySelector('.job-role').innerText;
        const jobOps = parentNode.querySelector('.job-ops').innerText;
        const jobStatus = parentNode.querySelector('.status').innerText;
        const jobNotes = parentNode.querySelector('.notes').innerText;

        parentNode.querySelector('.status').innerText = 'APPLIED';

        const jobInfo = {jobName, 
        jobRole, 
        jobOps, 
        jobStatus:'APPLIED', 
        jobNotes
        };

        const jobDetails = interviewList.find(item => item.jobName == jobInfo.jobName);
        
        if(!jobDetails){
        interviewList.push(jobInfo);
        }
        renderInterview();
    }

})

function renderInterview (){
    filterSection.innerHTML = '';

    for(let interview of interviewList){
        console.log(interview);
        let div = document.createElement('div');
        div.className = 'jobs flex justify-between bg-base-200 rounded-md mb-4 p-5'
        div.innerHTML = `
            <div class="space-y-5 mb-4">
                    <div>
                        <p class="job-name text-[#002C5C] font-bold text-lg">${interview.jobName}</p>
                        <p class="job-role text-sm font-light text-[#64748B]">React Native Developer</p>
                    </div>
                    <div class="job-ops text-xs font-light text-[#64748B]">
                        <span>Remote</span>
                        <span>•</span>
                        <span>Full-time</span>
                        <span>•</span>
                        <span>$130,000 - $175,000</span>
                    </div>
                    <div>
                        <p class="status bg-[#EEF4FF] p-2 w-[100px] font-semibold text-[14px] text-[#002C5C] mb-2">${interview.jobStatus}</p>
                        <p class="notes text-xs font-light text-[#323B49]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>
                    <div>
                        <button class="btn-interview w-[100px] h-[40px] border border-[#10B981] font-semibold text-[14px] rounded-md text-[#10B981] gap-2 hover:cursor-pointer">INTERVIEW</button>
                        <button class="btn-rejected w-[100px] h-[40px] border border-[#EF4444] font-semibold text-[14px] rounded-md text-[#EF4444] gap-2 hover:cursor-pointer">REJECTED</button>
                    </div>
                </div>
        `
        filterSection.appendChild(div);
    }
}