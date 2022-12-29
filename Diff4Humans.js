
class Diff4Humans {

    get(dateTime){
        let delta = Math.round((new Date()- dateTime) / 1000); //en seconde

        let minute = 60,
            hour = minute * 60,
            day = hour * 24,
            week = day * 7;

        let result;

        if (delta < 30) {
            result = "a l'instant";
        } else if (delta < minute) {
            result = 'il y a ' + delta + ' seconds.';
        } else if (delta < 2 * minute) {
            result = 'il y a 1 minute.'
        } else if (delta < hour) {
            result = 'il y a '+ Math.floor(delta / minute) + ' minutes.';
        } else if (Math.floor(delta / hour) == 1) {
            result = 'il y a 1 heure.'
        } else if (delta < day) {
            result = 'il y a '+ Math.floor(delta / hour) + ' heures.';
        } else if (delta < day * 2) {
            result = 'Hier';
        }else{
            result = 'il y a '+Math.floor(delta / day) + ' jours.';
        }

        return result;
    }

}

/*
** Example pratique
*/

let date = new Date("2022-10-01 13:45:10");

let diff = new Diff4Humans().get(date);

