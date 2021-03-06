function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('main #nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n
  }
}

function deepestChild() {
  const innerDiv = document.querySelector('div#grand-node div div div div')
  return innerDiv
}
