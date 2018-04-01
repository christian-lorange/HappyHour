var locations = [
{
    'name': "Coopersmith's Pub & Brewing",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"", 'saturday-end':""},  'description': "Mugs: $2.75 \n 20 Ounce Pints: $4 \n Pitchers: $12 \n Bargain Priced Pool", 'link':"https://coopersmithspub.com", 'pricing':"medium",   'phone-number': "", 'address': "5 Old Town Sq, Fort Collins 80524", 'other-amenities': ['outdoor','pets','medium'], 'has-drink':true, 'has-food':false},
{
    'name': "Choice City Butcher & Deli",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"1200", 'wednesday-end':"2000", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "Wed Beer Night! Check out the Facebook page for the weekly deal", 'link':"http://choicecitybutcher.com/beer.html", 'pricing':"medium",   'phone-number': "", 'address': "104 W Olive St, Fort Collins 80524", 'other-amenities': ['outdoor','','hard'], 'has-drink':true, 'has-food':false},
{
    'name': "Jay's Bistro",
    'area': "old_town",'hours': {
      'sunday-start':"1500", 'sunday-end':"1830", 'monday-start':"1500", 'monday-end':"1830", 'tuesday-start':"1500", 'tuesday-end':"1830", 'wednesday-start':"1500", 'wednesday-end':"1830", 'thursday-start':"1500", 'thursday-end':"1830", 'friday-start':"1500", 'friday-end':"1830", 'saturday-start':"1500", 'saturday-end':"1830"},  'description': "Cocktails: $5 \n Martinis: $6 \n Wine by the Glass: $5 \n Selected Draft Beers: $3.50", 'link':"http://www.jaysbistro.net/", 'pricing':"high",   'phone-number': "", 'address': "135 W Oak St, Fort Collins 80524", 'other-amenities': ['outdoor','','hard'], 'has-drink':true, 'has-food':false},
{
    'name': "Suh Sushi",
    'area': "campus",'hours': {
      'sunday-start':"1130", 'sunday-end':"1400", 'monday-start':"1100", 'monday-end':"1400", 'tuesday-start':"1100", 'tuesday-end':"1400", 'wednesday-start':"1100", 'wednesday-end':"1400", 'thursday-start':"1100", 'thursday-end':"1400", 'friday-start':"1100", 'friday-end':"1400", 'saturday-start':"1130", 'saturday-end':"1400"},  'description': "Special Priced Lunch Menu", 'link':"http://suhsushi.wixsite.com/suhsushi", 'pricing':"medium",   'phone-number': "", 'address': "200 W Prospect Rd, Fort Collins 80526", 'other-amenities': ['','','medium'], 'has-drink':true, 'has-food':true},
{
    'name': "Stuft - A Burger Bar",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://stuftburgerbar.com/splash/assets/pdf/stuftFTC.pdf", 'pricing':"medium",   'phone-number': "", 'address': "210 S. College Ave., Fort Collins 80524", 'other-amenities': ['outdoor','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Rio Grande Mexican Restaurant",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.riograndemexican.com/", 'pricing':"medium",   'phone-number': "", 'address': "143 W Mountain Ave, Fort Collins 80524", 'other-amenities': ['outdoor','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "HuHot Mongolian Grill",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.huhot.com/", 'pricing':"medium",   'phone-number': "", 'address': "249 S College Ave, Fort Collins 80524", 'other-amenities': ['','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "Youngs Café",
    'area': "midtown",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"http://www.youngscafe.com/", 'pricing':"medium",   'phone-number': "", 'address': "3307 S College Ave Ste 114, Fort Collins 80525", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Big City Burrito",
    'area': "campus",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.bigcityburrito.com/", 'pricing':"low",   'phone-number': "", 'address': "510 S College Ave, Fort Collins 80524", 'other-amenities': ['','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Beau Jo's Pizza",
    'area': "old_town",'hours': {
      'sunday-start':"1500", 'sunday-end':"1800", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"1500", 'saturday-end':"1800"},  'description': "Everyday: $1 off Wells, Wines and Drafts \n Monday \n $1 off Domestic Bottles & Drafts \n Tuesday \n $1 off Microbrews \n Wednesday \n $1 off all Gluten Free beer \n $3 Glass of House Wine \n Thursday \n $3 off Draft Pitchers \n $3 off Bottles of Wine \n Friday \n $6 Fat Tire Pints \n $3 Refills- Keep the Glass \n Saturday \n $3 Seasonal beers \n Sunday \n $3 Bloody Marys", 'link':"https://www.beaujos.com/", 'pricing':"medium",   'phone-number': "", 'address': "100 N College Ave, Fort Collins 80524", 'other-amenities': ['outdoor','','medium'], 'has-drink':true, 'has-food':false},
{
    'name': "Rodizio Grill",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.rodiziogrill.com/fort-collins/", 'pricing':"high",   'phone-number': "", 'address': "200 Jefferson St, Fort Collins 80524", 'other-amenities': ['','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "Melting Pot",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.meltingpot.com/fort-collins-co/", 'pricing':"high",   'phone-number': "", 'address': "334 E Mountain Ave, Fort Collins 80524", 'other-amenities': ['','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Austin's American Grill",
    'area': "s_foco",'hours': {
      'sunday-start':"1500", 'sunday-end':"1800", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"1600", 'saturday-end':"1800"},  'description': "Wide range of drink and food specials", 'link':"austinsamericangrill.com", 'pricing':"medium",   'phone-number': "", 'address': "2815 E Harmony Rd, Fort Collins 80528", 'other-amenities': ['outdoor','','hard'], 'has-drink':true, 'has-food':true},
{
    'name': "East Moon Asian Bistro & Hibachi",
    'area': "s_foco",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.eastmoonasianbistroco.com", 'pricing':"medium",   'phone-number': "", 'address': "2400 E Harmony Rd #102, Fort Collins 80528", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Café Vino",
    'area': "campus",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"cafevino.com/", 'pricing':"medium",   'phone-number': "", 'address': "1200 S College Ave., Fort Collins 80524", 'other-amenities': ['outdoor','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Five Guys Burgers and Fries",
    'area': "campus_west",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.fiveguys.com/", 'pricing':"Low",   'phone-number': "", 'address': "1335 W Elizabeth St, Fort Collins 80521", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Crown Pub",
    'area': "old_town",'hours': {
      'sunday-start':"2200", 'sunday-end':"2400", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"2200", 'friday-end':"2400", 'saturday-start':"2200", 'saturday-end':"2400"},  'description': "Premium Wells: $3.50 \n Martini’s & Manhattan's: $5.00  \n Select Draft Beers: $3.50 \n House Wines: $3.50 \n A range of food specials", 'link':"www.crownpub.net", 'pricing':"medium",   'phone-number': "", 'address': "134 S College Ave, Fort Collins 80524", 'other-amenities': ['outdoor','','medium'], 'has-drink':true, 'has-food':false},
{
    'name': "Tasty Harmony",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"tastyharmony.com/", 'pricing':"medium",   'phone-number': "", 'address': "130 South Mason, Fort Collins 80524", 'other-amenities': ['outdoor','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "The 415",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.thefourfifteen.com/", 'pricing':"high",   'phone-number': "", 'address': "415 S Mason, Fort Collins 80521", 'other-amenities': ['outdoor','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "East Moon Asian Bistro",
    'area': "midtown",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.eastmoonasianbistroco.com", 'pricing':"medium",   'phone-number': "", 'address': "1624 S Lemay Ave, Fort Collins 80525", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Pickle Barrel",
    'area': "campus",'hours': {
      'sunday-start':"1600", 'sunday-end':"1800", 'monday-start':"1600", 'monday-end':"1800", 'tuesday-start':"1600", 'tuesday-end':"1800", 'wednesday-start':"1600", 'wednesday-end':"1800", 'thursday-start':"1600", 'thursday-end':"1800", 'friday-start':"1600", 'friday-end':"1800", 'saturday-start':"1600", 'saturday-end':"1800"},  'description': "Daily Drink Specials", 'link':"picklebarrelfc.com/", 'pricing':"low",   'phone-number': "", 'address': "122 W Laurel St, Fort Collins 80524", 'other-amenities': ['outdoor','','hard'], 'has-drink':true, 'has-food':false},
{
    'name': "Jax Fish House & Oyster Bar",
    'area': "old_town",'hours': {
      'sunday-start':"1600", 'sunday-end':"1800", 'monday-start':"1600", 'monday-end':"1800", 'tuesday-start':"1600", 'tuesday-end':"1800", 'wednesday-start':"1600", 'wednesday-end':"1800", 'thursday-start':"1600", 'thursday-end':"1800", 'friday-start':"1600", 'friday-end':"1800", 'saturday-start':"1600", 'saturday-end':"1800"},  'description': "Numerous food and drink specials including a wide selection of oysters, mussels, and shrimp", 'link':"https://www.jaxfishhouse.com/fort-collins/", 'pricing':"high",   'phone-number': "", 'address': "123 N College Ave., Fort Collins, CO, Fort Collins 80524", 'other-amenities': ['outdoor','','hard'], 'has-drink':true, 'has-food':true},
{
    'name': "Krazy Karl's Pizza",
    'area': "campus_west",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.krazykarlspizza.com/", 'pricing':"low",   'phone-number': "", 'address': "1124 W. Elizabeth St., Fort Collins 80521", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Fish Restaurant",
    'area': "old_town",'hours': {
      'sunday-start':"1600", 'sunday-end':"1800", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"1500", 'saturday-end':"1800"},  'description': "Extensive menu of discounted & Happy Hour only food items as well as sixteen different half price wines and discounts on draft beer and cocktails", 'link':"fishmkt.com", 'pricing':"high",   'phone-number': "", 'address': "150 W Oak Street, Fort Collins 80524", 'other-amenities': ['','','medium'], 'has-drink':true, 'has-food':true},
{
    'name': "Thai Pepper",
    'area': "campus",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.thaipepperco.com", 'pricing':"low",   'phone-number': "", 'address': "109 E Laurel St, Fort Collins 80524", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Sonny Lubick Steakhouse",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.sonnylubicksteakhouse.com", 'pricing':"high",   'phone-number': "", 'address': "115 S College Ave, Fort Collins 80524", 'other-amenities': ['','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "Big Al's Burgers & Dogs",
    'area': "old_town",'hours': {
      'sunday-start':"1600", 'sunday-end':"2400", 'monday-start':"1600", 'monday-end':"1800", 'tuesday-start':"1600", 'tuesday-end':"1800", 'wednesday-start':"1600", 'wednesday-end':"1800", 'thursday-start':"1600", 'thursday-end':"1800", 'friday-start':"1600", 'friday-end':"1800", 'saturday-start':"1600", 'saturday-end':"2400"},  'description': "Well Martini: $6.50 \n 100% Agave Margarita: $6.50 \n Draught Pine & Bottled Beer: $1.00 off \n Wine by the Glass & Well Drinks: $1.00 off \n Range of small bites and appetizers", 'link':"bigalsburgersanddogs.com/", 'pricing':"low",   'phone-number': "", 'address': "140 West Mountain Ave, Fort Collins 80524", 'other-amenities': ['','','medium'], 'has-drink':true, 'has-food':true},
{
    'name': "Los Tarascos",
    'area': "campus",'hours': {
      'sunday-start':"1100", 'sunday-end':"2200", 'monday-start':"1600", 'monday-end':"1800", 'tuesday-start':"1100", 'tuesday-end':"1730", 'wednesday-start':"1600", 'wednesday-end':"1800", 'thursday-start':"1600", 'thursday-end':"1800", 'friday-start':"1600", 'friday-end':"1800", 'saturday-start':"1600", 'saturday-end':"1800"},  'description': "House Margaritas $8.00 \n Gold House Pitcher $17.00 \n Classic Margaritas $4.25 \n Classic Pitchers $19 \n Imported Beer $2 \n Domestic Beer $2 \n Tuesdays - Lady's Day (all day) \n Sunday - Men's Day (all day) \n 2 for 1 on House Margs, Classic Margs, Beers, and Wines \n Wed - Buy a Pitcher and Get a Free App 11am-4pm & 6pm-10pm", 'link':"www.lostaracos.com", 'pricing':"medium",   'phone-number': "", 'address': "626 S College Ave, Fort Collins 80524", 'other-amenities': ['outdoor','','medium'], 'has-drink':true, 'has-food':false},
{
    'name': "Avogadro's Number",
    'area': "campus",'hours': {
      'sunday-start':"900", 'sunday-end':"2400", 'monday-start':"1100", 'monday-end':"2400", 'tuesday-start':"1100", 'tuesday-end':"2400", 'wednesday-start':"1100", 'wednesday-end':"2400", 'thursday-start':"1100", 'thursday-end':"2400", 'friday-start':"1100", 'friday-end':"2400", 'saturday-start':"900", 'saturday-end':"2400"},  'description': "Daily Specials", 'link':"www.avogadros.com", 'pricing':"medium",   'phone-number': "", 'address': "605 S Mason Street, Fort Collins 80524", 'other-amenities': ['outdoor','','medium'], 'has-drink':true, 'has-food':false},
{
    'name': "Taj Mahal Restaurant",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1700", 'monday-end':"1800", 'tuesday-start':"1700", 'tuesday-end':"1800", 'wednesday-start':"1700", 'wednesday-end':"1800", 'thursday-start':"1700", 'thursday-end':"1800", 'friday-start':"1700", 'friday-end':"1800", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.tajmahalfortcollins.com/", 'pricing':"medium",   'phone-number': "", 'address': "148 W Oak St, Fort Collins 80524", 'other-amenities': ['','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Jeju Restaurant",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "House Hot Sake $2.50 (small) $5.00 (large) \n House Wine $5.00 \n Sake Bomb $2.00 \n ODELL IPA (FT. COLLINS) $3.00 \n Kirin Ichiban (draft) $3.00 \n New Belgium (draft) $3.00 \n Corona (bottle) $2.50 \n Coors Light (bottle) $2.50 \n Bud Light (bottle) $2.50 \n Wide range of sushi specials", 'link':"www.sushijeju.com", 'pricing':"medium",   'phone-number': "", 'address': "238 S College Ave, Fort Collins 80524", 'other-amenities': ['outdoor','','medium'], 'has-drink':true, 'has-food':true},
{
    'name': "Sri Tahi",
    'area': "campus_west",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"srithairestaurant.com/", 'pricing':"low",   'phone-number': "", 'address': "950 S Taft Hill Rd, Fort Collins 80521", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Moot House",
    'area': "midtown",'hours': {
      'sunday-start':"1500", 'sunday-end':"1800", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"1500", 'saturday-end':"1800"},  'description': "Mule: $7 /n Martini: $6 \n Select Cocktails: $6 \n Season Beer: $6 \n Wines: $5 \n Draft Beer: $1.50 off \n Fish & Chips with Beer: $24.95 \n Wide range of appetizers", 'link':"themoothouse.com/", 'pricing':"high",   'phone-number': "", 'address': "2626 S College Ave, Fort Collins 80525", 'other-amenities': ['outdoor','','easy'], 'has-drink':true, 'has-food':true},
{
    'name': "Nyala Ethiopian Cuisine",
    'area': "midtown",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.nyalafortcollins.com/", 'pricing':"medium",   'phone-number': "", 'address': "2900 Harvard St Ste A, Fort Collins 80525", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Cheba Hut Toasted Subs",
    'area': "campus",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://chebahut.com/", 'pricing':"low",   'phone-number': "", 'address': "104 E Laurel St, Fort Collins 80524", 'other-amenities': ['outdooor','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Wild Boar Coffee",
    'area': "campus",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.wildboarcoffee.com", 'pricing':"low",   'phone-number': "", 'address': "1510 South College Ave, Fort Collins 80524", 'other-amenities': ['outdoor','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Jim's Wings",
    'area': "campus_west",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"jimswings.com/", 'pricing':"low",   'phone-number': "", 'address': "1205 W Elizabeth St Ste C, Fort Collins 80521", 'other-amenities': ['','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Bann Thai",
    'area': "campus",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"bannthairestaurant.net/", 'pricing':"low",   'phone-number': "", 'address': "626 S College Ave, Fort Collins 80524", 'other-amenities': ['','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Island Grill",
    'area': "midtown",'hours': {
      'sunday-start':"1500", 'sunday-end':"1900", 'monday-start':"1500", 'monday-end':"1900", 'tuesday-start':"1500", 'tuesday-end':"1900", 'wednesday-start':"1500", 'wednesday-end':"1900", 'thursday-start':"1500", 'thursday-end':"1900", 'friday-start':"1500", 'friday-end':"1900", 'saturday-start':"1500", 'saturday-end':"1900"},  'description': "$3.25 Domestic Pints \n $3.00 Shot Specials \n $3.50 Well Drinks \n $4.25 Micro Beer Pints \n $4.00 House Wines \n $5.00 Margaritas \n $6.00 House Martinis", 'link':"www.islandgrillrestaurant.com", 'pricing':"medium",   'phone-number': "", 'address': "2601 S Lemay Ave Unit 12, Fort Collins 80525", 'other-amenities': ['','','easy'], 'has-drink':true, 'has-food':false},
{
    'name': "Spoons Soups & Salads",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://espoons.com", 'pricing':"low",   'phone-number': "", 'address': "172 N College Ave, Fort Collins 80524", 'other-amenities': ['','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "Ace Gillett's Lounge",
    'area': "old_town",'hours': {
      'sunday-start':"1600", 'sunday-end':"1800", 'monday-start':"1600", 'monday-end':"1800", 'tuesday-start':"1600", 'tuesday-end':"1800", 'wednesday-start':"1600", 'wednesday-end':"1800", 'thursday-start':"1600", 'thursday-end':"1800", 'friday-start':"1600", 'friday-end':"1800", 'saturday-start':"1600", 'saturday-end':"1800"},  'description': "", 'link':"https://acegilletts.com", 'pricing':"medium",   'phone-number': "", 'address': "239 South College Avenue, Fort Collins 80524", 'other-amenities': ['','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "Old Chicago",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://oldchicago.com/", 'pricing':"medium",   'phone-number': "", 'address': "147 S College Ave, Fort Collins 80524", 'other-amenities': ['','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "Alley Cat",
    'area': "campus",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.alleycatcoffeehouse.com", 'pricing':"low",   'phone-number': "", 'address': "120 1/2 W Laurel St, Fort Collins 80524", 'other-amenities': ['','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Anheuser-Busch Tour Center",
    'area': "n_foco",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.budweisertours.com/locations/ft-collins-colorado.html", 'pricing':"medium",   'phone-number': "", 'address': "2351 Busch Drive, Fort Collins, CO 80524", 'other-amenities': ['outdoor','pets','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Black Bottle Brewing",
    'area': "campus",'hours': {
      'sunday-start':"1100", 'sunday-end':"1600", 'monday-start':"1100", 'monday-end':"1600", 'tuesday-start':"1100", 'tuesday-end':"1600", 'wednesday-start':"1100", 'wednesday-end':"1600", 'thursday-start':"1100", 'thursday-end':"1600", 'friday-start':"1100", 'friday-end':"1600", 'saturday-start':"1100", 'saturday-end':"1600"},  'description': "$1 off Black Bottle Beers \n $4 well drinks", 'link':"https://blackbottleCraft Beer.com/", 'pricing':"medium",   'phone-number': "", 'address': "1611 S. College Ave., Ste 1609, Fort Collins, CO 80525", 'other-amenities': ['outdoor','','easy'], 'has-drink':true, 'has-food':false},
{
    'name': "Comet Chicken",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"cometchicken.com", 'pricing':"medium",   'phone-number': "", 'address': "126 W. Mountain Avenue, Fort Collins, CO 80524", 'other-amenities': ['','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "CopperMuse Distillery",
    'area': "old_town",'hours': {
      'sunday-start':"1200", 'sunday-end':"1900", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"1600", 'wednesday-end':"2100", 'thursday-start':"1600", 'thursday-end':"2100", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "Sundays: $2 off Bloody Mary’s \n Wed-Thur: \n $6 select cocktails including mules \n $2 off select appetizers", 'link':"www.coppermuse.com/", 'pricing':"medium",   'phone-number': "", 'address': "244 N. College Ave, Fort Collins, CO 80524", 'other-amenities': ['outdoor','','medium'], 'has-drink':true, 'has-food':true},
{
    'name': "Elevation 5003 Distillery",
    'area': "midtown",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"elevation5003.com/", 'pricing':"medium",   'phone-number': "", 'address': "2601 S Lemay Ave Unit 8, Fort Collins, CO 80525", 'other-amenities': ['outdoor','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Illegal Pete's",
    'area': "old_town",'hours': {
      'sunday-start':"1500", 'sunday-end':"2000", 'monday-start':"1500", 'monday-end':"2000", 'tuesday-start':"1500", 'tuesday-end':"2000", 'wednesday-start':"1500", 'wednesday-end':"2000", 'thursday-start':"1500", 'thursday-end':"2000", 'friday-start':"1500", 'friday-end':"2000", 'saturday-start':"1500", 'saturday-end':"2000"},  'description': "$2.50 Coors Lights & Coors Drafts \n $3.50 Select Craft Drafts \n $4 House Margaritas \n $3 Wells \n Free Chips and Salsa w/ Bar purchase", 'link':"illegalpetes.com/fort-collins-old-town", 'pricing':"low",   'phone-number': "", 'address': "320 Walnut Street, Fort Collins, CO 80524", 'other-amenities': ['outdoor','','hard'], 'has-drink':true, 'has-food':true},
{
    'name': "La Luz Mexican Grill",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "$3 Shots and Drafts \n $5 Jefe, Del Sol, Pomegranate Marg, MND & Lunch Box", 'link':"laluzgrill.com", 'pricing':"medium",   'phone-number': "", 'address': "200 Walnut Street, Fort Collins, CO 80524", 'other-amenities': ['outdoor','','hard'], 'has-drink':true, 'has-food':false},
{
    'name': "Maxline Brewing",
    'area': "midtown",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.maxlinebrewing.com", 'pricing':"low",   'phone-number': "", 'address': "2724 McClelland Drive Unit 190, Fort Collins, CO 80525", 'other-amenities': ['outdoor','pets','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Music City Hot Chicken",
    'area': "campus",'hours': {
      'sunday-start':"1500", 'sunday-end':"1900", 'monday-start':"1100", 'monday-end':"2030", 'tuesday-start':"1500", 'tuesday-end':"1900", 'wednesday-start':"1500", 'wednesday-end':"1900", 'thursday-start':"1500", 'thursday-end':"1900", 'friday-start':"1500", 'friday-end':"1900", 'saturday-start':"1500", 'saturday-end':"1900"},  'description': "$1 Off House Cocktails \n $5 Mai Tais All Day on Mondays!", 'link':"mchcco.com/", 'pricing':"low",   'phone-number': "", 'address': "111 W. Prospect Road, Propsector Shops, Fort Collins, CO 80525", 'other-amenities': ['','','easy'], 'has-drink':true, 'has-food':false},
{
    'name': "Nick's Italian",
    'area': "campus",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1530", 'monday-end':"1800", 'tuesday-start':"1530", 'tuesday-end':"1800", 'wednesday-start':"1530", 'wednesday-end':"1800", 'thursday-start':"1530", 'thursday-end':"1800", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "Draft beers $3.00 \n Budwiser $2.00 \n House Wine $3.75 \n Appetizer specials and pizza by the slice", 'link':"www.nicksfc.com/", 'pricing':"medium",   'phone-number': "", 'address': "1100 S. College Avenue, Fort Collins, CO 80524", 'other-amenities': ['outdoor','','easy'], 'has-drink':true, 'has-food':true},
{
    'name': "RARE Italian",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "Wide range of food and drink specials", 'link':"rareitalian.com/", 'pricing':"high",   'phone-number': "", 'address': "101 S. College Avenue, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':true, 'has-food':true},
{
    'name': "The Kitchen",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"", 'saturday-end':""},  'description': "$4 draft beer \n $5 wine \n $5 select cocktails \n $4 select appetizers", 'link':"https://www.thekitchenbistros.com/location/the-kitchen-fort-collins/", 'pricing':"high",   'phone-number': "", 'address': "100 N. College Ave, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':true, 'has-food':true},
{
    'name': "Bar Louie",
    'area': "midtown",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1600", 'monday-end':"1900", 'tuesday-start':"1600", 'tuesday-end':"1900", 'wednesday-start':"1600", 'wednesday-end':"1900", 'thursday-start':"1600", 'thursday-end':"1900", 'friday-start':"1600", 'friday-end':"1900", 'saturday-start':"", 'saturday-end':""},  'description': "$3.50 Drafts \n $4.50 Wines \n $5.50 Signature Martinis \n Half Price Select Apps and Flatbreads", 'link':"www.barlouie.com/locations/states/colorado/foothills-mall-fort-collins/", 'pricing':"medium",   'phone-number': "", 'address': "321 E Foothills Pkwy, Fort Collins, CO 80525", 'other-amenities': ['outdoor','','easy'], 'has-drink':true, 'has-food':true},
{
    'name': "Blue Agave",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"", 'saturday-end':""},  'description': "$5 Margaritas \n $2 off Wines \n $3 Bottled Beer", 'link':"www.blueagavegrillcolorado.com/menu/", 'pricing':"medium",   'phone-number': "", 'address': "201 S College Avenue, Fort Collins, CO 80524", 'other-amenities': ['outdoor','','hard'], 'has-drink':true, 'has-food':false},
{
    'name': "Buffalo Wild Wings",
    'area': "s_foco",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"buffalowildwings.com", 'pricing':"low",   'phone-number': "", 'address': "150 E. Harmony Road, 2A, Fort Collins, CO 80525", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "CB & Potts Restaurant & Craft Beer - Foothills",
    'area': "midtown",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"", 'saturday-end':""},  'description': "$4 drafts \n $4.50 wells \n $6 wine", 'link':"https://www.cbpotts.com/locations/foothills/", 'pricing':"medium",   'phone-number': "", 'address': "195 E Foothills Parkway, Fort Collins CO 80525", 'other-amenities': ['outdoor','','easy'], 'has-drink':true, 'has-food':true},
{
    'name': "CB & Potts Restaurant & Craft Beer - Collindale",
    'area': "",'hours': {
      'sunday-start':"2100", 'sunday-end':"2300", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"2100", 'saturday-end':"2300"},  'description': "$3.50 18oz house drafts, wells, wine & Potts Teas \n $3 to $5.50 select appetizers ", 'link':"https://www.cbpotts.com/locations/collindale/", 'pricing':"medium",   'phone-number': "", 'address': "1441 E Horsetooth Rd, Fort Collins, CO 80525", 'other-amenities': ['outdoor','','easy'], 'has-drink':true, 'has-food':true},
{
    'name': "Dominic's Restaurant",
    'area': "s_foco",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"1600", 'tuesday-end':"1800", 'wednesday-start':"1600", 'wednesday-end':"1800", 'thursday-start':"1600", 'thursday-end':"1800", 'friday-start':"1600", 'friday-end':"1800", 'saturday-start':"1600", 'saturday-end':"1800"},  'description': "", 'link':"https://www.domenicsrestaurant.com", 'pricing':"medium",   'phone-number': "", 'address': "931 E. Harmony Road, Fort Collins Shopping Cener, Fort Collins, CO 80525", 'other-amenities': ['outdoor','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Feisty Spirits Distillery",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.feistyspirits.com/", 'pricing':"medium",   'phone-number': "", 'address': "1708 East Lincoln Ave. #1, Fort Collins, CO 80524", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Fuzzy's Taco Shop - Elizabeth",
    'area': "campus_west",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.fuzzystacoshop.com/locations/fort-collins-co-elizabeth", 'pricing':"low",   'phone-number': "", 'address': "1335 W. Elizabeth Street, Fort Collins, CO 80521", 'other-amenities': ['','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Fuzzy's Taco Shop - Harmony",
    'area': "s_foco",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.fuzzystacoshop.com/locations/fort-collins-co-harmony/", 'pricing':"low",   'phone-number': "", 'address': "2909 E. Harmony Road, Fort Collins, CO 80528", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Gilded Goat Brewing",
    'area': "midtown",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://gildedgoatbrewing.com/", 'pricing':"medium",   'phone-number': "", 'address': "3500 S. College Avenue, Fort Collins, CO 80525", 'other-amenities': ['outdoor','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Horse & Dragon Brewing Company",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.horseanddragonbrewing.com/", 'pricing':"medium",   'phone-number': "", 'address': "124 Racquette Drive, Fort Collins, CO 80524", 'other-amenities': ['outdoor','pets','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Intersect Brewing",
    'area': "campus_west",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"intersectbrewing.com/", 'pricing':"medium",   'phone-number': "", 'address': "2160 W. Drake Road, Fort Collins, CO 80526", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Mobb Mountain Distillers",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.mobbmountain.com", 'pricing':"medium",   'phone-number': "", 'address': "400 Linden Street, Fort Collins, CO 80524", 'other-amenities': ['','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "New Belgium Brewing Company",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.newbelgium.com/Craft Beer", 'pricing':"medium",   'phone-number': "", 'address': "500 Linden Street, Fort Collins, CO 80524", 'other-amenities': ['outdoor','pets','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Odell Brewing Company",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.odellbrewing.com/", 'pricing':"medium",   'phone-number': "", 'address': "800 E. Lincoln Avenue, Fort Collins, CO 80524", 'other-amenities': ['outdoor','pets','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Pour Brothers Community Tavern",
    'area': "old_town",'hours': {
      'sunday-start':"1000", 'sunday-end':"1800", 'monday-start':"1600", 'monday-end':"1800", 'tuesday-start':"1600", 'tuesday-end':"1800", 'wednesday-start':"1600", 'wednesday-end':"1800", 'thursday-start':"1600", 'thursday-end':"1800", 'friday-start':"1400", 'friday-end':"1800", 'saturday-start':"1000", 'saturday-end':"1800"},  'description': " $1 off all drafts \n $3.50 Wells \n $5 grilled cheese meals.", 'link':"pourbrothers.com/", 'pricing':"medium",   'phone-number': "", 'address': "220 Linden Street, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':true, 'has-food':true},
{
    'name': "Prost Brewing Company",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://prostbrewing.com/", 'pricing':"medium",   'phone-number': "", 'address': "321 Old Firehouse Alley, Fort Collins, CO 80524", 'other-amenities': ['outdoor','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "Rally King Brewing",
    'area': "midtown",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://rallykingbrewing.com/", 'pricing':"medium",   'phone-number': "", 'address': "1624 S Lemay Ave #4, Fort Collins, CO", 'other-amenities': ['outdoor','pets','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Road 34",
    'area': "campus_west",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.road34.com/", 'pricing':"medium",   'phone-number': "", 'address': "1213 W. Elizabeth Street, Fort Collins, CO 80521", 'other-amenities': ['outdoor','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Scrumpy's",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"scrumpys.net", 'pricing':"medium",   'phone-number': "", 'address': " 215 N. College Avenue, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "Snowbank Brewing",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.snowbank.beer/", 'pricing':"medium",   'phone-number': "", 'address': "225 N. Lemay Avenue, Suite 1, Fort Collins, CO 80524", 'other-amenities': ['outdoor','pets','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "The Colorado Room",
    'area': "campus",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"", 'saturday-end':""},  'description': "Drinks \n $2 Domestics & Well Drinks \n $3 Flavored Pinnacle & Three Olives Vodka \n $4 Mile High Spirits \n Fireside & Fireside Peach Bourbon, Elevate Vodka, Denver Dry Gin, Peg Leg Rum \n $1 off Craft Drafts \n Food \n $2.50 Pork Sammys \n $3 Poutine", 'link':"thecoloradoroom.com", 'pricing':"medium",   'phone-number': "", 'address': "642 S. College Ave, Fort Collins, CO 80524", 'other-amenities': ['','','medium'], 'has-drink':true, 'has-food':true},
{
    'name': "Three Four Beer Co",
    'area': "campus",'hours': {
      'sunday-start':"1800", 'sunday-end':"2400", 'monday-start':"", 'monday-end':"", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "$1 off guest drafts", 'link':"www.threefourbeerco.com/", 'pricing':"medium",   'phone-number': "", 'address': "829 S. Shields Street, #100, Fort Collins, CO 80521", 'other-amenities': ['','','medium'], 'has-drink':true, 'has-food':false},
{
    'name': "Tony's Bar",
    'area': "old_town",'hours': {
      'sunday-start':"930", 'sunday-end':"2400", 'monday-start':"1030", 'monday-end':"1900", 'tuesday-start':"1030", 'tuesday-end':"1900", 'wednesday-start':"1030", 'wednesday-end':"1900", 'thursday-start':"1030", 'thursday-end':"1900", 'friday-start':"1030", 'friday-end':"1900", 'saturday-start':"930", 'saturday-end':"1900"},  'description': "Free pool during Happy Hour and all day Tuesday \n $2.00 Domestic Drafts \n $3.00 Select Micro Drafts \n $3.00 Single/$5.00 Double Wells and Freshies \n $5.00 Moscow Mules \n Happy Hour Appetizers: $6.00 Select appetizers Monday thru Friday 2 PM til 6 PM", 'link':"https://tonysbarfortcollins.com/", 'pricing':"medium",   'phone-number': "", 'address': "224 S. College Avenue, Fort Collins, CO 80524", 'other-amenities': ['outdoor','','hard'], 'has-drink':true, 'has-food':true},
{
    'name': "Tortilla Marissa's",
    'area': "midtown",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.tortillamarissas.com", 'pricing':"medium",   'phone-number': "", 'address': "2635 S. College Avenue, Fort Collins, CO 80525", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Wolverine Farm Letterpress & Publick House",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.wolverinefarm.org/letterpressandpublickhouse/", 'pricing':"medium",   'phone-number': "", 'address': "316 Willow Street, Fort Collins, CO 80524", 'other-amenities': ['','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Zwei Brewing",
    'area': "s_foco",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"www.zweibrewing.com/", 'pricing':"medium",   'phone-number': "", 'address': "4612 S. Mason St., Suite 120, Fort Collins, CO 80525", 'other-amenities': ['outdoor','pets','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "BJ's Restaurant & Brewhouse",
    'area': "s_foco",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1500", 'monday-end':"1900", 'tuesday-start':"1500", 'tuesday-end':"1900", 'wednesday-start':"1500", 'wednesday-end':"1900", 'thursday-start':"1500", 'thursday-end':"1900", 'friday-start':"1500", 'friday-end':"1900", 'saturday-start':"", 'saturday-end':""},  'description': "$2 Domestic Bottles \n $3 Wine \n $4 Calls \n $1 off draft beer and cocktails \n 1/2 off most apps and mini pizzas", 'link':"https://www.bjsrestaurants.com/locations/co/fort-collins", 'pricing':"medium",   'phone-number': "", 'address': "2670 E Harmony Rd, Fort Collins, CO 80525", 'other-amenities': ['','','easy'], 'has-drink':true, 'has-food':true},
{
    'name': "Blind Pig",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1000", 'monday-end':"1400", 'tuesday-start':"1400", 'tuesday-end':"1900", 'wednesday-start':"1400", 'wednesday-end':"1900", 'thursday-start':"1400", 'thursday-end':"1900", 'friday-start':"1400", 'friday-end':"1900", 'saturday-start':"1100", 'saturday-end':"1600"},  'description': "Tues-Fri: \n $3 select micros \n $2.50 domestics \n $3 wells \n $4 wine \n $5-7 select appetizers \n Saturdays: \n $12 select micro pitchers \n $10 domestic pitchers \n $3 select cocktails \n $1 mimosas \n $5 build your own bloody mary bar \n $14 all you can eat brunch. ", 'link':"blindpigfortcollins.com/", 'pricing':"medium",   'phone-number': "", 'address': "214 Linden St, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':true, 'has-food':true},
{
    'name': "Bondi's Beach Bar",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"1500", 'saturday-end':"1800"},  'description': "$2 wells \n $3 draughts \n $4 select wines", 'link':"", 'pricing':"medium",   'phone-number': "", 'address': "11 Old Town Square #120, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':true, 'has-food':false},
{
    'name': "Boot Grill",
    'area': "campus",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"", 'saturday-end':""},  'description': "$2 domestics \n $2.50 wells \n $3 micros and wine \n $5 appetizers", 'link':"thebootgrill.com/fort-collins/", 'pricing':"medium",   'phone-number': "", 'address': "130 W Laurel St b, Fort Collins, CO 80524", 'other-amenities': ['outdoor','','medium'], 'has-drink':true, 'has-food':true},
{
    'name': "Elliot's Martini Bar",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1630", 'monday-end':"1900", 'tuesday-start':"1630", 'tuesday-end':"1900", 'wednesday-start':"1630", 'wednesday-end':"1900", 'thursday-start':"1630", 'thursday-end':"1900", 'friday-start':"1630", 'friday-end':"1900", 'saturday-start':"", 'saturday-end':""},  'description': "$2 off martinis \n $2 off tapas", 'link':"elliotsmartini.com/", 'pricing':"medium",   'phone-number': "", 'address': "234 Linden St, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':true, 'has-food':true},
{
    'name': "Forge Publick House",
    'area': "old_town",'hours': {
      'sunday-start':"1400", 'sunday-end':"2200", 'monday-start':"1600", 'monday-end':"1800", 'tuesday-start':"1600", 'tuesday-end':"1800", 'wednesday-start':"1600", 'wednesday-end':"1800", 'thursday-start':"1600", 'thursday-end':"1800", 'friday-start':"1600", 'friday-end':"1800", 'saturday-start':"1600", 'saturday-end':"1800"},  'description': "$2 off select drafts ", 'link':"www.theforgepublickhouse.com", 'pricing':"medium",   'phone-number': "", 'address': "255 Old Firehouse Alley, Fort Collins, CO 80524", 'other-amenities': ['outdoor','','hard'], 'has-drink':true, 'has-food':false},
{
    'name': "Fox and Crow",
    'area': "midtown",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1600", 'monday-end':"1800", 'tuesday-start':"1600", 'tuesday-end':"1800", 'wednesday-start':"1600", 'wednesday-end':"1800", 'thursday-start':"1600", 'thursday-end':"1800", 'friday-start':"1600", 'friday-end':"1800", 'saturday-start':"", 'saturday-end':""},  'description': "1/2 off beer and cider \n Almost wines 1/2 off \n $6 Mini cheeseboard \n Other food specials", 'link':"www.thefoxandthecrow.net/", 'pricing':"medium",   'phone-number': "", 'address': "2601 S Lemay Ave Suite #9, Fort Collins, CO 80525", 'other-amenities': ['','','easy'], 'has-drink':true, 'has-food':true},
{
    'name': "High Point",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1600", 'monday-end':"1900", 'tuesday-start':"1600", 'tuesday-end':"1900", 'wednesday-start':"1600", 'wednesday-end':"1900", 'thursday-start':"1600", 'thursday-end':"1900", 'friday-start':"1600", 'friday-end':"1900", 'saturday-start':"1600", 'saturday-end':"1900"},  'description': "$2 PBR and Bud Lite \n $3 Wells \n $3.25 drafts \n $3.50 wine", 'link':"www.highpointbar.com/", 'pricing':"medium",   'phone-number': "", 'address': "146 N College Ave, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':true, 'has-food':false},
{
    'name': "Lucky Joes",
    'area': "old_town",'hours': {
      'sunday-start':"1100", 'sunday-end':"2400", 'monday-start':"1500", 'monday-end':"1900", 'tuesday-start':"1500", 'tuesday-end':"1900", 'wednesday-start':"1500", 'wednesday-end':"1900", 'thursday-start':"1500", 'thursday-end':"1900", 'friday-start':"1500", 'friday-end':"1900", 'saturday-start':"1100", 'saturday-end':"1900"},  'description': "Monday-Friday \n $1 off wells, wines, and drafts \n Saturday \n $1.50 Bud and Coors \n $2.50 wells and micros \n $3.50 Guinness \n $1 off wines \n Monday \n $3.50 burger baskets \n $2.50 pints of 90 Schilling, 5 Barrel, Odell IPA \n Tuesday \n $2.50 Guinness pints all day \n Wednesday \n $2.50 You Call It 7pm-close \n Thursday \n $3 pints w/ $3 bomb shots \n Sunday \n $2 Bloody Marys, well vodka drinks, and green chili \n $2.50 New Belgium", 'link':"www.luckyjoes.com/", 'pricing':"medium",   'phone-number': "", 'address': "25 Old Town Square, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':true, 'has-food':true},
{
    'name': "Mainline",
    'area': "old_town",'hours': {
      'sunday-start':"1500", 'sunday-end':"1800", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"1500", 'saturday-end':"1800"},  'description': "$3 craft beer cocktails \n $3.5 wells \n $1.5 off Breck and Wynkoop drafts \n $5 house wines", 'link':"www.mainlinefoco.com/", 'pricing':"medium",   'phone-number': "", 'address': "125 S College Ave, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':true, 'has-food':false},
{
    'name': "Social",
    'area': "old_town",'hours': {
      'sunday-start':"1600", 'sunday-end':"1800", 'monday-start':"1600", 'monday-end':"1800", 'tuesday-start':"1600", 'tuesday-end':"2400", 'wednesday-start':"1600", 'wednesday-end':"1800", 'thursday-start':"1600", 'thursday-end':"1800", 'friday-start':"1600", 'friday-end':"1800", 'saturday-start':"1600", 'saturday-end':"1800"},  'description': "$3 – $6 drink and food specials", 'link':"www.socialfortcollins.com/", 'pricing':"high",   'phone-number': "", 'address': "1, Old Town Square #7, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':true, 'has-food':true},
{
    'name': "Trailhead Tavern",
    'area': "old_town",'hours': {
      'sunday-start':"1100", 'sunday-end':"1900", 'monday-start':"1100", 'monday-end':"2400", 'tuesday-start':"1100", 'tuesday-end':"2300", 'wednesday-start':"1100", 'wednesday-end':"2400", 'thursday-start':"1100", 'thursday-end':"2400", 'friday-start':"1100", 'friday-end':"1900", 'saturday-start':"1100", 'saturday-end':"1900"},  'description': "Monday-Sunday 11 am-7 pm: \n $2 domestics and $6 pitchers \n $2.50-micros and $8 pitchers \n $2 wells \n $2 PBR pints (all day) \n Monday: \n Happy Hour All Day \n Tuesday: \n 2-for-1 burgers 7pm-11pm \n $2 select micros 7pm-close \n Wednesday 7 pm-close: \n $2.50 New Belgium \n Thursday 7 pm-close: \n $2.50 Odell beers \n $1 tacos 6-11 pm \n Friday: \n $6 PBR pitchers and $2.50 Jagermeister \n Saturday: \n $4 domestic beer and brat \n Sunday: \n $16 wings and pitcher (domestic) \n $19 wings and pitcher (micro)", 'link':"www.trailheadtavern.com/", 'pricing':"low",   'phone-number': "", 'address': "148 W Mountain Ave, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':false, 'has-food':false},


];
