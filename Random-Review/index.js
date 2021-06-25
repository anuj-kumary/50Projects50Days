const reviews = [
    {
    id: 1,
    name: "Anujkumar Yadav",
    img: "https://image.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg",
    job: "FrontEnd Developer",
    title: "I'm Frontend developer with 1 years of experience using all new technology"
}, {
    id: 2,
    name: "John Doe",
    img: "https://image.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg",
    job: "BackEnd Developer",
    title: "I'm Backend developer with 1 years of experience using all new technology"
}, {
    id: 3,
    name: "Mark Jonas",
    img: "https://image.freepik.com/free-photo/experienced-businessman-standing-office-room-indian-content-office-employee-eyeglasses-smiling-posing-with-folded-hands-business-management-corporation-concept_74855-11681.jpg",
    job: "UI Developer",
    title: "I'm UI developer with 1 years of experience using all new technology"
}, {
    id: 4,
    name: "kathline D'souza",
    img: "https://image.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg",
    job: "FrontEnd Developer",
    title: "I'm Frontend developer with 1 years of experience using all new technology"
}
];

const nextButton = document.getElementById('next');
const preButton = document.getElementById('prev');

const author = document.getElementById('author');
const title = document.getElementById('title');
const images = document.getElementById('images');


let currentReview = 0;
window.addEventListener('DOMContentLoaded',function(){
   getReviews()
})

title.addEventListener('click',function(){
    console.log('click')
})

function getReviews(){
    currentReview++;
    const item = reviews[currentReview];
    author.textContent = " - " + item.name;
    images.src = item.img
}
nextButton.addEventListener('click',function(){
    if(currentReview > reviews.length-1){
        currentReview = 0;
    }
    getReviews()
    
})

preButton.addEventListener('click',function(){
    currentReview--;
    if(currentReview < 0){
        currentReview = reviews.length-1;
    }
    getReviews()
})
