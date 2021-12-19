/*
      ■  ■  ■  □  □
■  ■  ■  ■  ■  □  □
■  ■  ■  ■  ■  □  □
■  ■  ■  ■  ■  □  □
■  ■  ■
*/

// const _ = ' '//en-space
// const _ = ' '//em-space
const _ = '  '//

const toUnicode = function (res, obj) {
  let txt = ''
  //  txt = `${obj.start.format('{month} {year}')}\n`
  res.forEach(days => {
    days.forEach(d => {
      let isEmpty = !d.isSame('month', obj.start)
      let isSelected = d.isBetween(obj.start, obj.end)
      let day = d.day()
      let isWeekend = day === 5 || day === 6

      if (isEmpty) {
        txt += _ + _  //2 en-space
        return
      }
      if (isWeekend) {
        txt += `□` + _
        // txt += '⬚'+ _
        return
      }
      // if (isSelected) {
      // txt += '◘' + _
      // txt += '⊡' + _
      // txt += '□' + _
      // txt += '⬚' + _
      // txt += '▫' + _
      //   return
      // }
      txt += '■' + _
      return
    })
    txt = txt.trim()
    txt += '\n'
  })
  console.log(txt)
}
export default toUnicode