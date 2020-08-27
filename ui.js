//render chat templates to DOM
//clear list of chats when room changes

class ChatUI {
    constructor(list){
        this.list = list;
    }
    clear(){
      this.list.innerHTML = '';  
    }
    render(data) {
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            { addSuffix: true}
        )
        const html = `
        <li class="list-group-item style="border:1px solid white;">
        <span class="usernames" style="font-weight:bold; font-family:'Oxanium';color:palevioletred;">${data.username}</span>
        <span class="message" style="font-weight:light; color:black; font-family:'Raleway';">${data.message}</span>
        <div class="time" style="font-family:'Raleway'; color:palegray;">${when}</div>
        </li>`
        ;

        this.list.innerHTML += html;
    }
}