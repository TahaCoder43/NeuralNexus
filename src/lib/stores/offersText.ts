import { readable } from "svelte/store";
import type { OffersTextStore } from "./types";

let offersTextStore = readable<OffersTextStore[]>([
    {
        heading: "O-level: </br> Single Subject",
        pricing: {
            price: `30<span class="unit">Days</span>\\5000<span class="unit">pkr</span>`,
            fainted: "(one topic)",
            description: "We will teach math, computer or physics for 40+ minutes",
            duration: "Duration: 4+ months",
            discount: null,
        },
        details: {
            method: {
                heading: "Metholigy",
                content: `<p>
                            We will prepare the student with topicals (past
                            papers arranged by topics) for 40 minutes for
                            single subject, Once the topicals are complete,
                            we will bring the most recent past papers to
                            test our students, and properly prepare them for
                            exams.
                        </p>`,
            },
            notes: {
                heading: "Notes",
                content: `<ul>
                            <li>
                                We will at minimum, take 4 months to prepare
                                a student, but this will change based on
                                student
                            </li>
                            <li>
                                The 40+ minutes is for a single subject, if
                                the student wants to learn all 3 subjects we
                                will teach for 2+ hours
                            </li>
                            <li>
                                The 5000pkr is for a single subject, if the
                                student wants to learn all 3 subjects we
                                will take 15000pkr, for discount see our
                                third offer
                            </li>
                        </ul>`,
            },
        },
        premium: null,
    },
    {
        heading: "Full-Stack Developer",
        pricing: {
            price: `30<span class="unit">Days</span>\\10000<span class="unit">pkr</span>`,
            fainted: null,
            description: "We will teach multiple computer languages for 1+ hour",
            duration: "Duration: 5+ months",
            discount: null,
        },
        details: {
            method: {
                heading: "Metholigy",
                content: `<p>
                            We begin by teaching HTML, CSS and then
                            JavaScript with React, Node.js, TypeScript and
                            Next.js thus teaching the student frontend.
                            Afterward we teach Python with Django and SQL
                            thus teaching the student backend. Combining the
                            skill of frontend and backend. We teach the
                            student to make his own Full-Stack websites. We
                            also give tips to the student on earning with
                            this skillset. Check
                            <a href="/faqs#12">FAQS</a> for the tips
                            we give
                        </p>`,
            },
            customize: {
                heading: "Customize The Course! Remember to add this on the frontpage",
                content: `<p>
                            A student can customize this course according to
                            preference. Students have a choice to learn
                            between Python Django or Flask and they can opt
                            out of Python for GoLang, RustLang or
                            Javascript. (Check
                            <a href="/faqs#15">FAQ</a> on why we
                            recommend Python Django). The frontend languages
                            can't be changed (Check
                            <a href="/faqs#17">FAQ</a> on why), and
                            SQL can't be changed (Check
                            <a href="/faqs#21">FAQ</a> on why).
                            Students can also opt to learn multiple
                            programming languages, that will increase the
                            duration of the Course (Check
                            <a href="/faqs#22">FAQ</a> on why students
                            should learn the rest on there own).
                        </p>`,
            },
            notes: {
                heading: "Notes",
                content: `<ul>
                            <li>
                                We will at minimum, take 5 months to prepare
                                a student, but this will change based on
                                student
                            </li>
                            <li>
                                Students are advised to bring there own
                                laptop. Check
                                <a href="/faqs#24">FAQ</a> on how
                                powerful the laptop should be and what to do
                                if students don't have laptop
                            </li>
                        </ul>`,
            },
        },
        premium: null,
    },
    {
        heading: "Mastery:<br />All In One!",
        pricing: {
            price: `30<span class="unit">Days</span>\\20000<span class="unit" >pkr</span >`,
            fainted: null,
            description: "We will teach all three subjects with full-stack development",
            duration: "Duration: 5+ months",
            discount: "20% off",
        },
        details: {
            "what-is-this": {
                heading: "What is this?",
                content: `<p>
                            This course is a combination of the other two
                            courses, if a students opts in to learn
                            everything together we offer a discount. Check
                            the details of the other two courses.
                        </p>`,
            },
            notes: {
                heading: "Notes",
                content: `<ul>
                            <li>
                                We will at minimum, take 5 months to prepare
                                a student, but this will change based on
                                student
                            </li>
                            <li>
                                We will teach programming and O-level at the
                                same time, so the we will teach for 3+ hours
                                a day
                            </li>
                        </ul>`,
            },
        },
        premium: "best offer",
    },
]);

export default offersTextStore;
