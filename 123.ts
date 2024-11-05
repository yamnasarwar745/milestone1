document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('section:nth-of-type(3) ul');
    const newSkill = document.createElement('li');
    newSkill.textContent = 'New Skill';
    skillsSection?.appendChild(newSkill);
});