import spacetime from 'spacetime'

const parseDate = function (str) {
	let s = spacetime(str)
	if (s.isValid() === false) {
		s = spacetime.now().month(str)
	}
	if (s.isValid() === false) {
		console.log(`Error: Couldn\'t parse input '${str}'\n`)
		s = spacetime.now()
	}
	// for now, assume one day
	let end = s.clone().add(1, 'day').minus(1, 'second')
	return { start: s, end: end }
}

export default parseDate
