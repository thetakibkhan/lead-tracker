function firstNonRepeatingChar(text) {
  const characters = Array.from(text);

  for (let i = 0; i < characters.length; i += 1) {
    let count = 0;
    const current = characters[i].toLowerCase();

    for (let j = 0; j < characters.length; j += 1) {
      if (characters[j].toLowerCase() === current) {
        count += 1;
      }
    }

    if (count === 1) {
      return characters[i];
    }
  }

  return null;
}

function findTwoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }

  return null;
}

function countLeadsByStatus(leads) {
  const counts = {};

  for (const lead of leads) {
    if (Object.hasOwn(counts, lead.status)) {
      counts[lead.status] += 1;
    } else {
      counts[lead.status] = 1;
    }
  }

  return counts;
}

module.exports = { firstNonRepeatingChar, findTwoSum, countLeadsByStatus };

if (require.main === module) {
  const assert = require('node:assert/strict');

  assert.equal(firstNonRepeatingChar('aabbcdd'), 'c');
  assert.equal(firstNonRepeatingChar('swiss'), 'w');
  assert.equal(firstNonRepeatingChar('aabb'), null);
  assert.equal(firstNonRepeatingChar(''), null);
  assert.equal(firstNonRepeatingChar('a!a?'), '!');

  assert.deepEqual(findTwoSum([2, 7, 11, 15], 9), [0, 1]);
  assert.deepEqual(findTwoSum([3, 2, 4], 6), [1, 2]);
  assert.deepEqual(findTwoSum([3, 3], 6), [0, 1]);
  assert.equal(findTwoSum([1, 2, 3], 10), null);

  const leads = [
    { name: 'Alice', status: 'NEW' },
    { name: 'Bob', status: 'CONTACTED' },
    { name: 'Charlie', status: 'NEW' },
  ];
  assert.deepEqual(countLeadsByStatus(leads), { NEW: 2, CONTACTED: 1 });
  assert.deepEqual(countLeadsByStatus([]), {});
  assert.deepEqual(leads, [
    { name: 'Alice', status: 'NEW' },
    { name: 'Bob', status: 'CONTACTED' },
    { name: 'Charlie', status: 'NEW' },
  ]);
}
