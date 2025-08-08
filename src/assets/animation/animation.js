import {stagger} from "motion";

export const pageVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },
};

export const listVariants = {
    hidden: {},
    show: {
        transition: {
            delayChildren: stagger(0.25),
        },
    }
};

export const listItemVariants = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
        },
    },
};