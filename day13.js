// Job Matching #1 https://www.codewars.com/kata/56c22c5ae8b139416c00175d/
function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary)
    throw new Error("Salary is empty");
  return candidate.minSalary - candidate.minSalary * 0.1 <= job.maxSalary;
}
// Job Matching #2 https://www.codewars.com/kata/56c2578be8b139bd5c001bd8
function match(job, candidates) {
  return candidates.filter(
    (el) =>
      (job.equityMax > 0 || !el.desiresEquity) &&
      job.locations.some(
        (l) => el.currentLocation === l || el.desiredLocations.includes(l)
      )
  );
}
