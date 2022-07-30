// Job Matching #3 https://www.codewars.com/kata/56c2a067585d9ac8280003c9/
function match(candidate, job) {
  return matchedExperience(candidate, job) && matchedSkill(candidate, job);
}
function matchedSkill(candidate, job) {
  for (skill of candidate.skills) {
    if (skill.name === job.skills[0].name && skill.preference === "avoid") {
      return false;
    }
  }

  for (skill of candidate.skills) {
    if (
      skill.name === job.skills[0].name ||
      skill.name === job.skills[0].substitutions[0].name
    )
      return true;
  }
  return false;
}
function matchedExperience(candidate, job) {
  for (skill of candidate.skills) {
    if (skill.preference === "desired") {
      skill.experience *= 1.5;
    }
    if (job.skills[0].idealYears <= skill.experience) {
      return true;
    }
    continue;
  }
  return false;
}
