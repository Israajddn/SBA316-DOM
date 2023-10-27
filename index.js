// popup screen
let popup = document.getElementById("popup");
function openPopup() {
    popup.classList.add("open-popup");
};
function closePopup() {
    popup.classList.remove("open-popup");
};

// array of personalities
const personalities = [`JANUARY – People born in January are born to be leaders. They will crave independence very early on, so get used to hearing the words ‘I will do’ often. They also love attention and will expect you to applaud every time they achieve a milestone. They are analytical as well as clever and creative which is the perfect combination. They stand out from the crowd and with an obvious charisma people are always happy to follow them. It is normal for them to follow a more traditional life than others.`,
    `FEBRUARY – February is the month of love and that’s just what you are; a big bundle of love. Relationships are incredibly important to people born in February and one of their main characteristics is empathy for others. These people are very goal orientated and are often described as ambitious and successful. While they are shy, goal-oriented, and humble, they may get aggressive when restricted.`,
    `MARCH – People born in March are dreamers. Their favorite toy is their imagination. Leave them alone, and they will be off to their dreamland. They love to be at peace all the time. Don’t mistake their aloofness with the outside world for laziness, though, as they’re observant, ambitious and believe in their creative talent enough to see it through. . On the negative side, they are very impulsive when it comes to making decisions. They are also quick-tempered and easily angered. And they tend to hold grudges.`,
    `APRIL – People born in April are meant to become leaders. You know the people who have a large group of friends around them? They’re most likely April kids. They are very charismatic and extremely ambitious. They are also smart, bossy, stubborn, and creative which makes them to always get what they want. They tend to remove themselves from any situation they find uncomfortable and painful. They are excellent problem-solvers, and people often ask them for advice.`,
    `MAY – People who are born in May are very creative and self-expressive. They are often talented writers, painters, actors, or musicians. They are also reliable and organized, ready to take responsibility. They are socially active, and can make friends wherever they go. They need fun and intelligence in equal amounts. However, they are fickle and get bored very easily. They also change their opinions and desires frequently.`,
    `JUNE – People born in June always try to maintain their integrity. They are the perfectionist who loves their “me time” and are quite difficult to understand. They are loved by all genders and treat everyone equally. They forgive but never forget. Wasting time behind unnecessary things isn’t their thing at all.`,
    `JULY – People born in July have a charming and interesting personality. They have good taste in food and music. They tend to find joy and beauty in the small things of life. They are also sensitive and composed. They are also known to have excess mood swings. Their mood changes several times a day just like the wind.`,
    `AUGUST – People born in August have an outgoing personality with “don’t give a damn” attitude. They enjoy the limelight and have a playful attitude towards life. Creativity is something inherent in them, though they tend to get distracted more often. They also have an outgoing personality. They are confident, have little self-control, but are kind-hearted. They can easily talk to people and get along with them as well.`,
    `SEPTEMBER – They are practical and always try to make the right choices in life. Their friends depend on them, and they wouldn’t do anything to harm others. Those born in this month are perfectionists to the core. They always ensure that every single thing assigned to them is fulfilled on time and that nobody gets a chance to point a finger at them.`,
    `OCTOBER – They are gentle, diplomatic, charming, and just. People born in October rarely raise their voice and lose their temper, and they can find common ground with almost any person. They are friendly in nature and love to be in a calmer and quieter surrounding.`,
    `NOVEMBER – People born in November are very intelligent and curious. They ask a lot of questions and they want to know all; they are inquisitive. If they want to achieve a goal, they are determined, stubborn and never give up. They prefer loneliness because they appreciate their independence and freedom. They are also the most athletic ones.`,
    `DECEMBER – They have flamboyance in whatever they do. Their intellectual abilities is what impress the ones they are talking to. December born people have a love for reading & gaining knowledge wherever they go in life. They always set a purpose & with their intellectual abilities, they go on to achieve it.`];


// form check 
const form = document.querySelector("#userForm");
const UserName = document.querySelector(".name");
const Email = document.querySelector(".email");
const checkbox = document.querySelector(".checkbox");
const birthMonth = document.querySelector(".birthMonth");
const submitBtn = document.querySelector(".btn2");

function checkForm(e) {
    e.preventDefault();
    // UserName check
    if (UserName.value == "") {
        alert("Error: Username cannot be blank.");
        UserName.focus();
        return false;
    }

    // email check
    if (Email.type !== "email") {
        alert("Error:The email must be a valid email address.");
        Email.focus();
        return false;
    }

    re = /(?=.*@)(?!.*example).*/;

    if (!re.test(Email.value)) {
        alert("Error: The email must not be from the domain example.com.");
        Email.focus();
        return false;
    }

    // birthMonth check
    if (birthMonth.value < 1 || birthMonth.value > 12) {
        alert("Error: birth month should be a number between 1-12!");
        birthMonth.focus();
        return false;
    }
    function goToPersonality(btn){
        window.location.href = "personality.html"
    };

    return goToPersonality(submitBtn);

}



form.addEventListener("submit", checkForm);