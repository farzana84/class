
export default class Timecode {
  
    static fromSeconds(duration){
        const hours = Math.floor( duration / (60 * 60));
        const minutes = Math.floor( duration / 60 )-(hours * 60);
        const seconds = duration - (hours * 60 *60)- (minutes * 60);
        return `${hours}: ${minutes}: ${seconds}`; // ekhane '' ata kaj korbena ..... dite hobe ``
        //return `${hours}`;
    }

        static fromMinutes(duration){
            return Timecode.fromSeconds(duration*60);
        
    }
}