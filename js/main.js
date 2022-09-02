const quests = document.querySelectorAll('.quest')

let acc = 1

quests.forEach((quest, indx) => {
    quest.onclick = () => {
        quests[acc].removeAttribute('show')
        quests[indx].setAttribute('show', '')
        acc = indx
    }
})