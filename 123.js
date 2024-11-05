document.addEventListener('DOMContentLoaded', function () {
    var skillsSection = document.querySelector('section:nth-of-type(3) ul');
    var newSkill = document.createElement('li');
    newSkill.textContent = 'New Skill';
    skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.appendChild(newSkill);
});
