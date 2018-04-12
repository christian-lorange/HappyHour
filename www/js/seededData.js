var locations = [
{
    'name': "New Belgium Brewing Company",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"http://www.newbelgium.com/Craft Beer", 'pricing':"medium",   'phone-number': "", 'address': "500 Linden Street, Fort Collins, CO 80524", 'other-amenities': ['outdoor','pets','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Nick's Italian",
    'area': "campus",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1530", 'monday-end':"1800", 'tuesday-start':"1530", 'tuesday-end':"1800", 'wednesday-start':"1530", 'wednesday-end':"1800", 'thursday-start':"1530", 'thursday-end':"1800", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "Draft beers $3.00 \n Budwiser $2.00 \n House Wine $3.75 \n Appetizer specials and pizza by the slice", 'link':"http://www.nicksfc.com/", 'pricing':"medium",   'phone-number': "", 'address': "1100 S. College Avenue, Fort Collins, CO 80524", 'other-amenities': ['outdoor','','easy'], 'has-drink':true, 'has-food':true},
{
    'name': "Nyala Ethiopian Cuisine",
    'area': "midtown",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.nyalafortcollins.com/", 'pricing':"medium",   'phone-number': "", 'address': "2900 Harvard St Ste A, Fort Collins 80525", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Odell Brewing Company",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.odellbrewing.com/", 'pricing':"medium",   'phone-number': "", 'address': "800 E. Lincoln Avenue, Fort Collins, CO 80524", 'other-amenities': ['outdoor','pets','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Old Chicago",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://oldchicago.com/", 'pricing':"medium",   'phone-number': "", 'address': "147 S College Ave, Fort Collins 80524", 'other-amenities': ['','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "Pickle Barrel",
    'area': "campus",'hours': {
      'sunday-start':"1600", 'sunday-end':"1800", 'monday-start':"1600", 'monday-end':"1800", 'tuesday-start':"1600", 'tuesday-end':"1800", 'wednesday-start':"1600", 'wednesday-end':"1800", 'thursday-start':"1600", 'thursday-end':"1800", 'friday-start':"1600", 'friday-end':"1800", 'saturday-start':"1600", 'saturday-end':"1800"},  'description': "Daily Drink Specials", 'link':"http://www.picklebarrelfc.com/", 'pricing':"low",   'phone-number': "", 'address': "122 W Laurel St, Fort Collins 80524", 'other-amenities': ['outdoor','','hard'], 'has-drink':true, 'has-food':false},
{
    'name': "Pour Brothers Community Tavern",
    'area': "old_town",'hours': {
      'sunday-start':"1000", 'sunday-end':"1800", 'monday-start':"1600", 'monday-end':"1800", 'tuesday-start':"1600", 'tuesday-end':"1800", 'wednesday-start':"1600", 'wednesday-end':"1800", 'thursday-start':"1600", 'thursday-end':"1800", 'friday-start':"1400", 'friday-end':"1800", 'saturday-start':"1000", 'saturday-end':"1800"},  'description': " $1 off all drafts \n $3.50 Wells \n $5 grilled cheese meals.", 'link':"http://www.pourbrothers.com/", 'pricing':"medium",   'phone-number': "", 'address': "220 Linden Street, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':true, 'has-food':true},
{
    'name': "Prost Brewing Company",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://prostbrewing.com/", 'pricing':"medium",   'phone-number': "", 'address': "321 Old Firehouse Alley, Fort Collins, CO 80524", 'other-amenities': ['outdoor','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "Rally King Brewing",
    'area': "midtown",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://rallykingbrewing.com/", 'pricing':"medium",   'phone-number': "", 'address': "1624 S Lemay Ave #4, Fort Collins, CO", 'other-amenities': ['outdoor','pets','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "RARE Italian",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1600", 'monday-end':"1800", 'tuesday-start':"1600", 'tuesday-end':"1800", 'wednesday-start':"1600", 'wednesday-end':"1800", 'thursday-start':"1600", 'thursday-end':"1800", 'friday-start':"1600", 'friday-end':"1800", 'saturday-start':"1600", 'saturday-end':"1800"},  'description': "Wide range of food and drink specials", 'link':"http://www.rareitalian.com/", 'pricing':"high",   'phone-number': "", 'address': "101 S. College Avenue, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':true, 'has-food':true},
{
    'name': "Rio Grande Mexican Restaurant",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.riograndemexican.com/", 'pricing':"medium",   'phone-number': "", 'address': "143 W Mountain Ave, Fort Collins 80524", 'other-amenities': ['outdoor','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "Road 34",
    'area': "campus_west",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"http://www.road34.com/", 'pricing':"medium",   'phone-number': "", 'address': "1213 W. Elizabeth Street, Fort Collins, CO 80521", 'other-amenities': ['outdoor','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Rodizio Grill",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.rodiziogrill.com/fort-collins/", 'pricing':"high",   'phone-number': "", 'address': "200 Jefferson St, Fort Collins 80524", 'other-amenities': ['','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "Scrumpy's",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"http://www.scrumpys.net", 'pricing':"medium",   'phone-number': "", 'address': " 215 N. College Avenue, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "Slyce Pizza Co",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.slycepizzaco.com/", 'pricing':"low",   'phone-number': "", 'address': "163 W. Mountain Ave, Fort Collins, Co 80524", 'other-amenities': ['','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Smokin Fins",
    'area': "midtown",'hours': {
      'sunday-start':"1100", 'sunday-end':"2100", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"", 'saturday-end':""},  'description': "2 for 1 Drink Specials /n Range of Appetizer Specials /n Buy 1 Sushi Roll, Get Half Off 2nd Roll", 'link':"http://finsconcepts.com/restaurants/smokin-fins-grill/", 'pricing':"medium",   'phone-number': "", 'address': "327 E Foothills Pkwy #120, Fort Collins, CO 80525", 'other-amenities': ['outdoor','','easy'], 'has-drink':true, 'has-food':true},
{
    'name': "Snowbank Brewing",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"http://www.snowbank.beer/", 'pricing':"medium",   'phone-number': "", 'address': "225 N. Lemay Avenue, Suite 1, Fort Collins, CO 80524", 'other-amenities': ['outdoor','pets','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Social",
    'area': "old_town",'hours': {
      'sunday-start':"1600", 'sunday-end':"1800", 'monday-start':"1600", 'monday-end':"1800", 'tuesday-start':"1600", 'tuesday-end':"2400", 'wednesday-start':"1600", 'wednesday-end':"1800", 'thursday-start':"1600", 'thursday-end':"1800", 'friday-start':"1600", 'friday-end':"1800", 'saturday-start':"1600", 'saturday-end':"1800"},  'description': "$3 – $6 drink and food specials", 'link':"http://www.socialfortcollins.com/", 'pricing':"high",   'phone-number': "", 'address': "1, Old Town Square #7, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':true, 'has-food':true},
{
    'name': "Sonny Lubick Steakhouse",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"http://www.sonnylubicksteakhouse.com", 'pricing':"high",   'phone-number': "", 'address': "115 S College Ave, Fort Collins 80524", 'other-amenities': ['','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "Spoons Soups & Salads",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://espoons.com", 'pricing':"low",   'phone-number': "", 'address': "172 N College Ave, Fort Collins 80524", 'other-amenities': ['','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "Sri Tahi",
    'area': "campus_west",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"http://www.srithairestaurant.com/", 'pricing':"low",   'phone-number': "", 'address': "950 S Taft Hill Rd, Fort Collins 80521", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Stuft - A Burger Bar",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://stuftburgerbar.com/splash/assets/pdf/stuftFTC.pdf", 'pricing':"medium",   'phone-number': "", 'address': "210 S. College Ave., Fort Collins 80524", 'other-amenities': ['outdoor','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Suh Sushi",
    'area': "campus",'hours': {
      'sunday-start':"1130", 'sunday-end':"1400", 'monday-start':"1100", 'monday-end':"1400", 'tuesday-start':"1100", 'tuesday-end':"1400", 'wednesday-start':"1100", 'wednesday-end':"1400", 'thursday-start':"1100", 'thursday-end':"1400", 'friday-start':"1100", 'friday-end':"1400", 'saturday-start':"1130", 'saturday-end':"1400"},  'description': "Special Priced Lunch Menu", 'link':"http://suhsushi.wixsite.com/suhsushi", 'pricing':"medium",   'phone-number': "", 'address': "200 W Prospect Rd, Fort Collins 80526", 'other-amenities': ['','','medium'], 'has-drink':true, 'has-food':true},
{
    'name': "Sunset Lounge",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://sunsetloungerooftop.com/", 'pricing':"medium",   'phone-number': "", 'address': "378 Walnut St, Fort Collins, CO 80524", 'other-amenities': ['','',''], 'has-drink':false, 'has-food':false},
{
    'name': "Taj Mahal Restaurant",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1700", 'monday-end':"1800", 'tuesday-start':"1700", 'tuesday-end':"1800", 'wednesday-start':"1700", 'wednesday-end':"1800", 'thursday-start':"1700", 'thursday-end':"1800", 'friday-start':"1700", 'friday-end':"1800", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"http://www.tajmahalfortcollins.com/", 'pricing':"medium",   'phone-number': "", 'address': "148 W Oak St, Fort Collins 80524", 'other-amenities': ['','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Tasty Harmony",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"http://www.tastyharmony.com/", 'pricing':"medium",   'phone-number': "", 'address': "130 South Mason, Fort Collins 80524", 'other-amenities': ['outdoor','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "Thai Pepper",
    'area': "campus",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"http://www.thaipepperco.com", 'pricing':"low",   'phone-number': "", 'address': "109 E Laurel St, Fort Collins 80524", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "The 415",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.thefourfifteen.com/", 'pricing':"high",   'phone-number': "", 'address': "415 S Mason, Fort Collins 80521", 'other-amenities': ['outdoor','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "The Colorado Room",
    'area': "campus",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"", 'saturday-end':""},  'description': "Drinks \n $2 Domestics & Well Drinks \n $3 Flavored Pinnacle & Three Olives Vodka \n $4 Mile High Spirits \n Fireside & Fireside Peach Bourbon, Elevate Vodka, Denver Dry Gin, Peg Leg Rum \n $1 off Craft Drafts \n Food \n $2.50 Pork Sammys \n $3 Poutine", 'link':"http://www.thecoloradoroom.com", 'pricing':"medium",   'phone-number': "", 'address': "642 S. College Ave, Fort Collins, CO 80524", 'other-amenities': ['','','medium'], 'has-drink':true, 'has-food':true},
{
    'name': "The Kitchen",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1500", 'monday-end':"1800", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"1500", 'friday-end':"1800", 'saturday-start':"", 'saturday-end':""},  'description': "$4 draft beer \n $5 wine \n $5 select cocktails \n $4 select appetizers", 'link':"https://www.thekitchenbistros.com/location/the-kitchen-fort-collins/", 'pricing':"high",   'phone-number': "", 'address': "100 N. College Ave, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':true, 'has-food':true},
{
    'name': "Three Four Beer Co",
    'area': "campus",'hours': {
      'sunday-start':"1800", 'sunday-end':"2400", 'monday-start':"", 'monday-end':"", 'tuesday-start':"1500", 'tuesday-end':"1800", 'wednesday-start':"1500", 'wednesday-end':"1800", 'thursday-start':"1500", 'thursday-end':"1800", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "$1 off guest drafts", 'link':"http://www.threefourbeerco.com/", 'pricing':"medium",   'phone-number': "", 'address': "829 S. Shields Street, #100, Fort Collins, CO 80521", 'other-amenities': ['','','medium'], 'has-drink':true, 'has-food':false},
{
    'name': "Tony's Bar",
    'area': "old_town",'hours': {
      'sunday-start':"930", 'sunday-end':"2400", 'monday-start':"1030", 'monday-end':"1900", 'tuesday-start':"1030", 'tuesday-end':"1900", 'wednesday-start':"1030", 'wednesday-end':"1900", 'thursday-start':"1030", 'thursday-end':"1900", 'friday-start':"1030", 'friday-end':"1900", 'saturday-start':"930", 'saturday-end':"1900"},  'description': "Free pool during Happy Hour and all day Tuesday \n $2.00 Domestic Drafts \n $3.00 Select Micro Drafts \n $3.00 Single/$5.00 Double Wells and Freshies \n $5.00 Moscow Mules \n Happy Hour Appetizers: $6.00 Select appetizers Monday thru Friday 2 PM til 6 PM", 'link':"https://tonysbarfortcollins.com/", 'pricing':"medium",   'phone-number': "", 'address': "224 S. College Avenue, Fort Collins, CO 80524", 'other-amenities': ['outdoor','','hard'], 'has-drink':true, 'has-food':true},
{
    'name': "Torchys Tacos",
    'area': "midtown",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"1500", 'monday-end':"1900", 'tuesday-start':"1500", 'tuesday-end':"1900", 'wednesday-start':"1500", 'wednesday-end':"1900", 'thursday-start':"1500", 'thursday-end':"1900", 'friday-start':"1500", 'friday-end':"1900", 'saturday-start':"", 'saturday-end':""},  'description': "$1.50 Off All Beers and Margs \n $0.50 Off Everything Else", 'link':"https://torchystacos.com/location/fort-collins/", 'pricing':"medium",   'phone-number': "", 'address': "3280 S COLLEGE AVE FORT COLLINS, CO 80525", 'other-amenities': ['outdoor','','easy'], 'has-drink':true, 'has-food':true},
{
    'name': "Tortilla Marissa's",
    'area': "midtown",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"http://www.tortillamarissas.com", 'pricing':"medium",   'phone-number': "", 'address': "2635 S. College Avenue, Fort Collins, CO 80525", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Trailhead Tavern",
    'area': "old_town",'hours': {
      'sunday-start':"1100", 'sunday-end':"1900", 'monday-start':"1100", 'monday-end':"2400", 'tuesday-start':"1100", 'tuesday-end':"2300", 'wednesday-start':"1100", 'wednesday-end':"2400", 'thursday-start':"1100", 'thursday-end':"2400", 'friday-start':"1100", 'friday-end':"1900", 'saturday-start':"1100", 'saturday-end':"1900"},  'description': "Monday-Sunday 11 am-7 pm: \n $2 domestics and $6 pitchers \n $2.50-micros and $8 pitchers \n $2 wells \n $2 PBR pints (all day) \n Monday: \n Happy Hour All Day \n Tuesday: \n 2-for-1 burgers 7pm-11pm \n $2 select micros 7pm-close \n Wednesday 7 pm-close: \n $2.50 New Belgium \n Thursday 7 pm-close: \n $2.50 Odell beers \n $1 tacos 6-11 pm \n Friday: \n $6 PBR pitchers and $2.50 Jagermeister \n Saturday: \n $4 domestic beer and brat \n Sunday: \n $16 wings and pitcher (domestic) \n $19 wings and pitcher (micro)", 'link':"http://www.trailheadtavern.com/", 'pricing':"low",   'phone-number': "", 'address': "148 W Mountain Ave, Fort Collins, CO 80524", 'other-amenities': ['','','hard'], 'has-drink':false, 'has-food':false},
{
    'name': "Union",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.unionbarsodafountain.com/", 'pricing':"medium",   'phone-number': "", 'address': "", 'other-amenities': ['outdoor','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Wild Boar Coffee",
    'area': "campus",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"http://www.wildboarcoffee.com", 'pricing':"low",   'phone-number': "", 'address': "1510 South College Ave, Fort Collins 80524", 'other-amenities': ['outdoor','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Wolverine Farm Letterpress & Publick House",
    'area': "old_town",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"https://www.wolverinefarm.org/letterpressandpublickhouse/", 'pricing':"medium",   'phone-number': "", 'address': "316 Willow Street, Fort Collins, CO 80524", 'other-amenities': ['','','medium'], 'has-drink':false, 'has-food':false},
{
    'name': "Youngs Café",
    'area': "midtown",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"http://www.youngscafe.com/", 'pricing':"medium",   'phone-number': "", 'address': "3307 S College Ave Ste 114, Fort Collins 80525", 'other-amenities': ['','','easy'], 'has-drink':false, 'has-food':false},
{
    'name': "Zwei Brewing",
    'area': "s_foco",'hours': {
      'sunday-start':"", 'sunday-end':"", 'monday-start':"", 'monday-end':"", 'tuesday-start':"", 'tuesday-end':"", 'wednesday-start':"", 'wednesday-end':"", 'thursday-start':"", 'thursday-end':"", 'friday-start':"", 'friday-end':"", 'saturday-start':"", 'saturday-end':""},  'description': "", 'link':"http://www.zweibrewing.com/", 'pricing':"medium",   'phone-number': "", 'address': "4612 S. Mason St., Suite 120, Fort Collins, CO 80525", 'other-amenities': ['outdoor','pets','medium'], 'has-drink':false, 'has-food':false},



];
