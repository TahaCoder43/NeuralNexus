import { readable } from "svelte/store";

interface FAQ {
    heading: string;
    para: string;
}

let faqStore = readable<FAQ[]>([
    {
        heading: "1. Will we come to your home to teach?",
        para: " No. Check <a href='#3'>FAQ 3</a>",
    },
    {
        heading: "2. Do we teach online?",
        para: " No. Check <a href='#3'>FAQ 3</a>",
    },
    {
        heading: "3. What can I do if I want to learn at home?",
        para: ` You can contact us, and we will refer you to other
                teachers who we know, who are willing to come and teach
                at the student's home. Check  <a href='#9'>FAQ 9</a>
                for who these teachers are.`,
    },
    {
        heading: "4. Do we reduce prices?",
        para: ` Depends on the family or the student, we will never
                *reduce* price unless we spot talent in a student who is
                unable to afford or tuition. We won't reduce price, if
                we spot no special talent, or if the student can pay for
                himself. If you fall into this category, we can refer
                you to some schools which are generally cheaper. Check
                <a href='#9'>FAQ 9</a> for what these schools are.`,
    },
    {
        heading:
            "5. What if I want to learn, a subject other than, Computer, Maths and Physics in O-level",
        para: ` We can refer you to other teachers who will teach you
                the other subject. Check <a href='#9'>FAQ 9</a> for who
                these teachers are.`,
    },
    {
        heading: "6. Do we teach students of A-level",
        para: " No. Check <a href='#8'>FAQ 8</a>",
    },
    {
        heading: "7. Do we teach students of Punjab Board, or Federal Board",
        para: " No. Check <a href='#8'>FAQ 8</a>",
    },
    {
        heading: "8. What to do, if I am in A-levels, Punjab Board or Federal Board",
        para: ` We can refer you to other teachers who are willing to
                teach A-levels, Punjab Board or Federal Board. See
                <a href='#9'>FAQ 9</a> on who these teachers are.`,
    },
    {
        heading: "9. Who are these teachers or school we refer students to as alternatives?",
        para: ` These teachers or schools are people or places by which
                I was taught, and came to love their teaching style.
                They are not associated with this institute, but because
                of my trust in them, I will refer students to them.`,
    },
    {
        heading:
            "10. Why does the time that takes to prepare (months taken to prepare for exam) a student changed based on students",
        para: ` We will take varying amounts of times to teach different
                type of students, some students pick up a concept faster
                than others, and thus it take less time to teach them,
                there are also other variables that can vary the time it
                takes for a student to learn (i.e the student takes too
                many vacations).`,
    },
    {
        heading: "11. Are we willing to teach a student for more time (hours in a single day)?",
        para: ` Yes. Since different students take different times to
                pick up a concept, we are willing to teach students for
                more time, then the one written on the course, or maybe
                even less time (if the student understands quicker).
                Although the time we take in a day to teach a student
                won't vary by big margins.`,
    },
    {
        heading: "12. How do we teach earning to the students learning full-stack development",
        para: ` First and foremost we'll teach the student the
                importance of Full-stack development, which will nicely
                segway into why the students should try to open there
                own businesses rather than work under others. We'll
                teach the students what they can make using there new
                found skill, what type of people are willing to take
                there services, and how they can approach people to
                advertise there sklll (i.e building a portfolio website,
                or how a teen can make deals, even though adults may not
                take him seriously).`,
    },
    {
        heading: "13. What is Python, RustLang, JavaScript, TypeScript, SQL, HTML, CSS, and GoLang",
        para: ` These are all programming languages, except HTML, CSS.
                RustLang and Golang are known as Rust and Go. HTML is a
                markup language only used to define the structure of web
                pages, and CSS is a design language only used to design
                a web page. TypeScript is just a type-safe version of
                Javascript.`,
    },
    {
        heading: "14. What is Python Django and Flask",
        para: ` Django and Flask are two different frameworks of Python,
                that can both be used accomplish the same tasks.`,
    },
    {
        heading: "15. Why we teach Python Django by default, and recommend it?",
        para: ` We recommed and teach Python Django, because of it's
                popularity, and ease of use. Python is a much simpler
                and popular programming language compared to the other
                three. Flask is simpler than Django, but Django is way
                more popular. It is important to note that just because
                we teach Python Django, doesn't mean it's the best for
                all use cases, different frameworks and languages are
                good for different purposes. For our teaching purpose,
                we find Python Django to be the best option.`,
    },
    {
        heading: "16. Isn't Python Slow?",
        para: ` Yes, Python and even Javascript, are slow performance
                languages. RustLang and GoLang are way faster. But it's
                important to note that in most applications, speed is
                not a requirement. Speed is only needed in specific
                projects where it's required. faster languages like
                GoLang and RustLang are harder to learn, and harder to
                get the job done with.`,
    },
    {
        heading: "17. Why are HTML, CSS and JavaScript required to learn for Frontend-Development?",
        para: ` Browsers only support three languages which are HTML,
                CSS and Javascript. Each has there own purpose thus they
                are the only languages that can be used for
                Frontend-Development. In recent years support for new
                languages through Web Assembly is possible, but it's new
                and has a lot of problems.`,
    },
    {
        heading: "18. What is React and Next.js?",
        para: ` React is a Frontend-Development framework of JavaScript,
                and Next.js is a framework of React. There are also
                other Frontend-Development frameworks each with their
                own advantage, but we teach React as it's extremely
                popular, and Next.js is the most developed and
                feature-full framework.`,
    },
    {
        heading: "19. Can I learn other frameworks of JavaScript",
        para: ` No, right now we only teach React, as we find it as the
                best choice, but in the future we may consider to teach
                other Frontend-Development frameworks like Sveltve, and
                Svelte-kit.`,
    },
    {
        heading: "20. What is Node.js?",
        para: ` Node.js is a runtime for Javascript, it has alternatives
                like Deno and Bun, but they are new and underdeveloped.`,
    },
    {
        heading: "21. Why can't I opt out SQL?",
        para: ` SQL is the only language that can be used to intereact
                with databases, and thus it's required to learn.
                Although it does have different dialects, currently we
                will teach both MySQL and SQLite, but in the future we
                may add PostgreSQL.`,
    },
    {
        heading:
            "22. Why we recommend that students learn a few programming languages and frameworks through us, and then learn the rest on there own?",
        para: ` What we are trying to teach students are the basics that
                will apply to all frameworks and languages. Programming
                languages are really similar, and once a student has
                learnt his first programming language, other programming
                languages will be easier and quicker to learn. Some
                people are able to learn Python in one day, because of
                they have learnt other languages, but that is not
                possible for a new student. That's also why we teach
                Python, as through Python, students are easily able to
                grasp concepts of programming, making other programming
                languages easier to learn.`,
    },
    {
        heading:
            "23. How can students learn on there own, after the Full-Stack development course?",
        para: ` In the Full-Stack development we get students familiar
                with self-taught development, We will guide them on how
                to learn on there own. We are also willing to keep
                contact with our ex-students, so if they get stuck on
                something, we can help them out.`,
    },
    {
        heading: "24. How powerful should my laptop be?",
        para: ` The laptop should have atleast 8gb RAM, with i5 of fifth
                generation+. It should also have 256+gb SSD.`,
    },
    {
        heading: "25. What to do if I have no laptop, or no laptop powerful enough?",
        para: ` Not having a laptop powerful enough, is not a big deal,
                it will ruin the learning expierience of the student
                lighly. Not having a laptop at all, may affect the
                learning expierience of the student, but we are willing
                to teach a student without a laptop.`,
    },
]);

export default faqStore;
