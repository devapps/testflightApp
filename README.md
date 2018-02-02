# Test Flight  - Mobile App

[<img src="https://i.imgur.com/Q2Ma1zW.png">](https://vimeo.com/254016493)

> Test flight is a prototyping platform, focused on enabling internal innovation for large enterprises. Gaining traction on disruptive, or even incremental, innovation is difficult. Large enterprises have many organizations and channels, leaders have different agendas, priorities, funding needs, and ambitions.

>This platform enables an innovation team to continuously develop new mobile experiences and push those prototypes to specific organizational members (be it executives, peers, or whomever). Additionally, to gain the attention of the busy executive of today, you must remove all barriers. This mobile app does just that. Once logged in, the executive need only open the app, the platform does the rest.

* Deliver mobile app prototypes via a single mobile app
* Dictate which experience each mobile user will receive
* Remove all points of friction for executives to view the experience
* Obtain immediate feedback on each experience from your testers


## Installation

1. Setup your computer for [React Native](http://https://facebook.github.io/react-native/docs/getting-started.html) Development
2. Clone this repository -  - note, the experience folders should be recreated as they are specific prototypes I made. Those are the experiences you alter. At a minimum, you'll need to rebuild the Firebase db.
3. Run npm install to enable packages
4. [Clone and implement web server repo](http://https://github.com/stanley-nicholl/proto-backend)
5. [Clone and implement admin repo](https://github.com/stanley-nicholl/testflight-admin-frontend)
6. Create .env files to target your web server

## Next Steps

- [ ] Improve responsiveness of admin site (not targeted for mobile users - most innovation teams not working off of phones)
- [ ] Deploy mobile application
- [ ] Stretch - update mobile experience to include hot loading (no longer need to rely on app updates via respective stores)
