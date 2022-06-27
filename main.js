// 1
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// 2
const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

// 4
const  tabActive = $('.tab-item.active') 
const line = $('.tabs .line')
// 4
line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'

// 3
tabs.forEach((tab,index) => {
  const pane = panes[index]

  
  //3 
  tab.onclick = function() {
    $('.tab-item.active').classList.remove('active')
    $('.tab-pane.active').classList.remove('active')

    // 4
    line.style.left = this.offsetLeft + 'px'
    line.style.width = this.offsetWidth + 'px'

    // 3
    this.classList.add('active')
    pane.classList.add('active')
  }

  
})

