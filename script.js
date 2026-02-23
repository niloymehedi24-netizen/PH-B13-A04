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
console.log(mainContainer);

function totalJobCount(){
    allCount.innerText = allJobSection.children.length;
    allInterview.innerText = interviewList.length;
    allRejected.innerText = rejectedList.length;
}

totalJobCount();

function toggleStyle(id){

    // removing blue bg for all button
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
}