const course = [{
        title: "Advanced JS",
        cost: 50,
    },
    {
        title: "ReactJS",
        cost: 25,
    },
    {
        title: "NodeJS",
        cost: 50,
    },
    {
        title: "ExpressJS",
        cost: 25,
    },
];
exports.showHome = (req, res) => {
    res.render("index");
};
exports.showCourses = (req, res) => {
    res.render("courses", { offredCourses: course });
};
exports.showSignUp = (req, res) => {
    res.render("contact");
};
exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};