// Linked list
// [
//   ["a", "aab", "aa", "ab"],
//   ["ab", "b", "ba", "bab"],
//   ["aaaa", "aaa", "bba", "abab"],
// ];
// =>
// [
//   {
//     name: "a",
//     child: [
//       {
//         name: "aa",
//         child: [
//           {
//             name: "aaa",
//             child: [
//               {
//                 name: "aaaa",
//                 child: [],
//               },
//             ],
//           },
//           {
//             name: "aab",
//             child: [],
//           },
//         ],
//       },
//       {
//         name: "ab",
//         child: [
//           {
//             name: "abab",
//             child: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "b",
//     child: [
//       {
//         name: "ba",
//         child: [
//           {
//             name: "bab",
//             child: [],
//           },
//         ],
//       },
//       {
//         name: "bba",
//         child: [],
//       },
//     ],
//   },
// ];

function arr2List(arr) {
  const list = [];
  const head = {
    name: arr[0],
    child: [],
  };
  let prev = head;
  list.push(prev);
  for (let i = 1; i < arr.length; i++) {
    const current = {
      name: arr[i],
      child: [],
    };
    prev.child.push(current);
    prev = current;
  }
  return list;
}

function mergeList(tree, list) {
  if (!tree) {
    return;
  }
  const hasCommonParent = tree.some((treeItem) => {
    // 有共同的父节点
    if (treeItem.name === list[0].name) {
      mergeList(treeItem.child, list[0].child);
      return true;
    }
    return false;
  });

  if (!tree.length || !hasCommonParent) {
    tree.push(list[0]);
  }
}

function arr2Tree(arr) {
  const tree = [];
  arr.forEach((item) => {
    const list = arr2List(item);
    mergeList(tree, list);
  });
  return tree;
}

// const arr = [
//   ["a", "aa", "aaa", "aaaa"],
//   ["b", "bb", "bbb"],
//   ["a", "ab", "aba"],
//   ["a", "aa", "aab"],
// ];
const arr = [
  ["a", "aab", "aa", "ab"],
  ["ab", "b", "ba", "bab"],
  ["aaaa", "aaa", "bba", "abab"],
];
console.log(JSON.stringify(arr2Tree(arr), null, 2));
