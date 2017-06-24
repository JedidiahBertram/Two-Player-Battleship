# Two Player Battleship Game
![alt text](https://github.com/JedidiahBertram/two-player-battleship/blob/master/assets/Battleship_Logo.jpg)

---
### Stack:
* __Socket.io__
* __JavaScript__
* __HTML__
* __CSS__

### Technologies to be used:
* __Redis__
* __Express__

---
## The Story Behind the App

I'll be the first to tell you, this app has a long way to go. But for good reason.

My two-player Battleship App was created for my third quarter project at Galvanize Austin. We were given a week to complete the project, with the intention of setting out to do something we would likely not be able to complete. Our ideas were vetted by our instructor to ensure they were difficult enough to be a real challenge, and had to involve a technology we did not know, and would have to teach ourselves.

I picked Battleship because I'm a big board/tabletop game fan and it is one of my all time favorites. I also really enjoy thinking through game logic and making that work in code. Plus the idea of multiplayer always intrigued me.

This is where my unfamiliar technology came in with socket.io.

I spent the first four days of the project week studying how socket.io works. Going through two tutorials, and working through two projects before I attempted implementing it in my battleship app. Along the way I also learned about using redis to create a database, and why redis is advantages when using web sockets. Unfortunately, I did not get to the point of implimenting the knowledge of redis and express with socket.io, but plan on working on the project later when I get the opportunity and adding that functionality.

The other projects I worked through and used as a way of learning sockets were a canvas art app, and a chat app. If these were deployed, users could visit the site and draw together, or chat together, from completely separate computer. The following GIFs are examples of how they work. Notice that I am switching from tab to tab, simulating computer to computer/user to user functionality.

__Chat app:__

![alt text](https://github.com/JedidiahBertram/two-player-battleship/blob/master/assets/chatapp.gif)

__Canvas art app:__

![alt text](https://github.com/JedidiahBertram/two-player-battleship/blob/master/assets/pixelartgif.gif)

After I went through these projects, commenting out code line by line, and finally rewriting them on my own to get to the forms you see in the GIFs, I felt comfortable enough to being the battleship app.

I went step by step, first just making divs register ships being set, and hits on a single page. Which looked like this:

![alt text](https://github.com/JedidiahBertram/two-player-battleship/blob/master/assets/batlleship1st.gif)

*(Ships are being set one div at a time with the first click, hits registered on second click.)*

Then, I had to figure out how to have that information sent over via web sockets, which wound up looking like this:

![alt text](https://github.com/JedidiahBertram/two-player-battleship/blob/master/assets/battleship2nd.gif)

*(Basically the same functionality, being shared from tab to tab.)*

Then came one of if not the biggest challenge I had to face, which was figuring out how to utilize sockets, the technology I just learned, to make the game logic work. It actually came to me in the shower that if I could make two grids, and have clicks on the first change the second, and only have that change be made on the other end of the socket (only be emitted to the other end of the socket) and vice versa, it just might work.

My logic and thinking was correct, and working through that was eventually what landed me on the version of the app I presented, as seen below:

![alt text](https://github.com/JedidiahBertram/two-player-battleship/blob/master/assets/battleshiFinal.gif)

*(For some explanation, the ships are still set div by div. Basically at this point, you can play from computer to computer sitting at the same table as your opponent. Some honesty is required. Like I said it has a ways to go, which will be elaborated on in the next section.)*

Not shown in the GIF is the game alerting you when you've won or lost.

---
### Features to be added:

At the outset of the project, my hopes were very ambitious I am still quite proud of what I did in a week, and honestly the heavy lifting is out of the way. The rest is just some fun logic!

The features I would like to add are as follows:

* Anonymous two player functionality
  * Forced turns and turn states
  * Two way hit registering
  * Sink notifications
* In game text chat
* Realistic ship placement
  * Instead of individual div selection, players can drag and drop divs that mark all divs at once.
* User database
  * Use redis and express to create a user database
  * Add friend challenging/invitation functionality
  * keep user profiles with win loss record
* Socket room functionality. IE Only two players per room etc.

---
If you would like to play a round with your friend following the guidelines previously mentioned, the app is deployed at:
https://battleship-jedidiah.herokuapp.com/
