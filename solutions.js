function firstNonRepeatingChar(text) {
  const characters = Array.from(text);

  for (let i = 0; i < characters.length; i += 1) {
    let count = 0;
    const current = characters[i].toLowerCase();

    for (let j = 0; j < characters.length; j += 1) {
      if (characters[j].toLowerCase() === current) {
        count ++;
      }
    }

    if (count === 1) {
      return characters[i];
    }
  }

  return null;
}

function findTwoSum(nums, target) {
  const arr = nums.map((num, index) => ({ num, index }));

  arr.sort((a, b) => a.num - b.num);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left].num + arr[right].num;

    if (sum === target) {
      return [arr[left].index, arr[right].index];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
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
