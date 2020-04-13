# Carbon Voyage, a Coding Bootcamp Praha 2020 Winter Batch Final Project

Built in two weeks by <a href="http://github.com/soaresilva">Diogo Soares Silva</a>, <a href="http://github.com/piedaddy">Gabrielle Wildfeuer</a>, and <a href="http://github.com/LyubenTenekedzhiev">Lyuben Tenekedzhiev</a>. It allows the user to search for flights between two airports. Upon selecting the desired flight, the application calculates the total distance between airports and the amount of carbon dioxide emmited during the trip, offering the user the possibility to offset their emissions. Registered users and organizations can keep track of their carbon footprint on their personal or organization profiles.

## You can access a deployed version of our carbon footprint calculator <a href="http://carbon-calculator.codeboot.cz/">here</a>.

Carbon Voyage's backend was developed using Laravel. It allows token-based authentication for two types of users (individuals and organizations). Its Eloquent ORM was used for working with our MySQL database. Blade templates defined the layout for both the SPA and the user/organization profiles. Additionally, it uses <a href="https://charts.erik.cat/">Laravel Charts</a> with the <a href="https://www.chartjs.org/docs/latest/charts/">Chartjs</a> library for data visualization.

The frontend, not only for the SPA but also for user and organization profiles, was developed using React.js, taking advantage of <a href="https://react-redux.js.org/">Redux</a> bindings and <a href="https://material-ui.com/">Material UI</a> and <a href="https://getbootstrap.com/">Bootstrap 4</a> components. We used a mix of <a href="https://sass-lang.com/">SASS</a> and regular CSS to style particular components. We fetched the list of flights on any given day using the very helpful <a href="https://docs.kiwi.com/">Kiwi.com API</a>. 
