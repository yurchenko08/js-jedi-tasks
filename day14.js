function match(candidate, job) {
  return !!matchedExperience(candidate, job) && !!matchedSkill(candidate, job);
}
function matchedSkill(candidate, job) {
  let firstCondition;
  for (const skill of candidate.skills) {
    if (skill.preference === "avoid") continue;
    for (const jobSkill of job.skills) {
      if ("substitutions" in jobSkill) {
        if (
          skill.name === jobSkill.name ||
          skill.name === jobSkill.substitutions
        )
          firstCondition = skill;
      } else {
        if (skill.name === jobSkill.name) firstCondition = skill;
      }
    }
  }
  return firstCondition;
}
function matchedExperience(candidate, job) {
  let secondCondition;
  for (const skill of candidate.skills) {
    if (skill.preference === "desired") skill.experience *= 1.5;
    for (jobSkill of job.skills) {
      if ("substitutions" in jobSkill) {
        if (
          skill.experience >= jobSkill.idealYears &&
          (skill.name === jobSkill.name ||
            skill.name === jobSkill.substitutions)
        )
          secondCondition = skill;
      } else {
        if (
          skill.experience >= jobSkill.idealYears &&
          skill.name === jobSkill.name
        )
          secondCondition = skill;
      }
    }
  }
  return secondCondition;
}
