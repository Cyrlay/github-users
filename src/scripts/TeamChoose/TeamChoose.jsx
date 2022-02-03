import './TeamChoose.css'
export const teamBackground = (props) => {
    if (props % 4 === 0 && props % 6 === 0) {
        return 'teamC'
    } else if (props % 4 === 0) {
        return 'teamA'
    } else if (props % 6 === 0) {
        return 'teamB'
    } else {
        return 'teamNull'
    }
}

export const teamBadge = (props) => {
    if (props % 4 === 0 && props % 6 === 0) {
        return 'Team C'
    } else if (props % 4 === 0) {
        return 'Team A'
    } else if (props % 6 === 0) {
        return 'Team B'
    } else {
        return null
    }
}