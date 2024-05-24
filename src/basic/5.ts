enum DayOfWeek {
 Monday,
 Tuesday,
 Wednesday,
 Thursday,
 Friday,
 Saturday,
 Sunday
}

const weekend = {
    saturday: DayOfWeek.Saturday,
    sunday: DayOfWeek.Sunday,
}

const isWeekend = (day:DayOfWeek): boolean => {
    if (day === weekend.saturday || day === weekend.sunday) {
        return true;
    } else {
        return false;
    }
}

const today = DayOfWeek.Friday;
console.log(isWeekend(today))