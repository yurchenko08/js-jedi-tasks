function match(candidate, job) {
  return !!matchedExperience(candidate, job) && !!matchedSkill(candidate, job);
}
function matchedSkill(candidate, job) {
  let firstCondition;
  for (const skill of candidate.skills) {
    if (skill.preference === "avoid") continue;
    for (const jobSkill of job.skills) {
      if (
        skill.name === jobSkill.name ||
        skill.name === jobSkill.substitutions[0].name
      )
        firstCondition = skill;
    }
  }
  return firstCondition;
}
function matchedExperience(candidate, job) {
  let secondCondition;
  for (const skill of candidate.skills) {
    if (skill.preference === "desired") skill.experience *= 1.5;
    for (jobSkill of job.skills) {
      if (
        skill.experience >= jobSkill.idealYears &&
        (skill.name === jobSkill.name ||
          skill.name === jobSkill.substitutions[0].name)
      )
        secondCondition = skill;
    }
  }
  return secondCondition;
}
