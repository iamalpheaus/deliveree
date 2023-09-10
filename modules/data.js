const data = [
    {"URL":"http://www.just-eat.co.uk/restaurants-cn-chinese-cardiff/menu","_id":{"$oid":"55f14312c7447c3da7051b26"},"address":"228 City Road","address line 2":"Cardiff","name":".CN Chinese","outcode":"CF24","lat":"0", "long":"0", "postcode":"3JH","rating":5,"type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-atthai-ss9/menu","_id":{"$oid":"55f14312c7447c3da7051b27"},"address":"376 Rayleigh Road","address line 2":"Essex","name":"@ Thai","outcode":"SS9","lat":"0", "long":"0", "postcode":"5PT","rating":"5.5","type_of_food":"Thai"},
    {"URL":"http://www.just-eat.co.uk/restaurants-atthairestaurant/menu","_id":{"$oid":"55f14312c7447c3da7051b28"},"address":"30 Greyhound Road Hammersmith","address line 2":"London","name":"@ Thai Restaurant","outcode":"W6","lat":"0", "long":"0", "postcode":"8NX","rating":"4.5","type_of_food":"Thai"},
    {"URL":"http://www.just-eat.co.uk/restaurants-atthairestaurant/menu","_id":{"$oid":"55f14312c7447c3da7051b29"},"address":"30 Greyhound Road Hammersmith","address line 2":"London","name":"@ Thai Restaurant","outcode":"W6","lat":"0", "long":"0", "postcode":"8NX","rating":"4.5","type_of_food":"Thai"},
    {"URL":"http://www.just-eat.co.uk/restaurants-indiancom-ch4/menu","_id":{"$oid":"55f14312c7447c3da7051b2a"},"address":"9 Broughton Hall Road","address line 2":"Broughton","name":"@Indian.com","outcode":"CH4","lat":"0", "long":"0", "postcode":"0QR","rating":6,"type_of_food":"Curry"},
    {"URL":"http://www.just-eat.co.uk/restaurants-007takeaway-s65/menu","_id":{"$oid":"55f14312c7447c3da7051b2b"},"address":"6 Drummond Street","address line 2":"Rotherham","name":"007 Takeaway","outcode":"S65","lat":"0", "long":"0", "postcode":"1HY","rating":6,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-042-restaurant-e11/menu","_id":{"$oid":"55f14312c7447c3da7051b2c"},"address":"885 High Road Leytonstone","address line 2":"London","name":"042 Restaurant \u0026 Bar","outcode":"E11","lat":"0", "long":"0", "postcode":"1HR","rating":3,"type_of_food":"African"},
    {"URL":"http://www.just-eat.co.uk/restaurants-042-restaurant-e11/menu","_id":{"$oid":"55f14312c7447c3da7051b2d"},"address":"885 High Road Leytonstone","address line 2":"London","name":"042 Restaurant \u0026 Bar","outcode":"E11","lat":"0", "long":"0", "postcode":"1HR","rating":3,"type_of_food":"African"},
    {"URL":"http://www.just-eat.co.uk/restaurants-042-restaurant-e11/menu","_id":{"$oid":"55f14312c7447c3da7051b2e"},"address":"885 High Road Leytonstone","address line 2":"London","name":"042 Restaurant \u0026 Bar","outcode":"E11","lat":"0", "long":"0", "postcode":"1HR","rating":3,"type_of_food":"African"},
    {"URL":"http://www.just-eat.co.uk/restaurants-1-2-3-chinese-rowlands-gill/menu","_id":{"$oid":"55f14312c7447c3da7051b2f"},"address":"Unit 4 Spencer House","address line 2":"Swalwell","name":"1 2 3 Chinese","outcode":"NE16","lat":"0", "long":"0", "postcode":"3DS","rating":"4.5","type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-1-2-3-chinese-rowlands-gill/menu","_id":{"$oid":"55f14312c7447c3da7051b30"},"address":"Unit 4 Spencer House","address line 2":"Swalwell","name":"1 2 3 Chinese","outcode":"NE16","lat":"0", "long":"0", "postcode":"3DS","rating":"4.5","type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-100-degrees-chinese-restaurant-pontypridd/menu","_id":{"$oid":"55f14312c7447c3da7051b31"},"address":"67 Park Street","address line 2":"Treforest","name":"100 Degrees Chinese Restaurant","outcode":"CF37","lat":"0", "long":"0", "postcode":"1SN","rating":5,"type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-100menu-wn1/menu","_id":{"$oid":"55f14312c7447c3da7051b32"},"address":"50 Wallgate","address line 2":"Wigan","name":"100 Menu","outcode":"WN1","lat":"0", "long":"0", "postcode":"1JU","rating":5,"type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-104-turkish-BBQ/menu","_id":{"$oid":"55f14312c7447c3da7051b33"},"address":"104 Tanners Lane","address line 2":"Essex","name":"104 Turkish BBQ","outcode":"IG6","lat":"0", "long":"0", "postcode":"1QE","rating":5,"type_of_food":"Turkish"},
    {"URL":"http://www.just-eat.co.uk/restaurants-109restaurant-w2/menu","_id":{"$oid":"55f14312c7447c3da7051b34"},"address":"109 Westbourne Park Road","address line 2":"London","name":"109 Ristorante","outcode":"W2","lat":"0", "long":"0", "postcode":"5QL","rating":5,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-113-fish-bar-wallasey/menu","_id":{"$oid":"55f14312c7447c3da7051b35"},"address":"113 Poulton Road","address line 2":"Merseyside","name":"113 Fish Bar","outcode":"CH44","lat":"0", "long":"0", "postcode":"9DE","rating":"5.5","type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-133-takeaway-irvine/menu","_id":{"$oid":"55f14312c7447c3da7051b36"},"address":"133 Fullarton Street","address line 2":"Irvine","name":"133 Takeaway","outcode":"KA12","lat":"0", "long":"0", "postcode":"8DG","rating":"Not yet rated","type_of_food":"Breakfast"},
    {"URL":"http://www.just-eat.co.uk/restaurants-1498thespiceaffair-pe11/menu","_id":{"$oid":"55f14312c7447c3da7051b37"},"address":"Red Lion Hotel","address line 2":"Spalding","name":"1498 The Spice Affair","outcode":"PE11","lat":"0", "long":"0", "postcode":"1SU","rating":"5.5","type_of_food":"Curry"},
    {"URL":"http://www.just-eat.co.uk/restaurants-168chinese-ls18/menu","_id":{"$oid":"55f14312c7447c3da7051b38"},"address":"17 Alexandra Road","address line 2":"West Yorkshire","name":"168 Chinese \u0026 Cantonese Takeaway","outcode":"LS18","lat":"0", "long":"0", "postcode":"4HE","rating":"5.5","type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-1awok-pa7/menu","_id":{"$oid":"55f14312c7447c3da7051b39"},"address":"Unit 2 30 Greenock Road","address line 2":"Bishopton","name":"1A Wok","outcode":"PA7","lat":"0", "long":"0", "postcode":"5JN","rating":5,"type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-1pizza1com-ls26/menu","_id":{"$oid":"55f14312c7447c3da7051b3a"},"address":"160 Leeds Road","address line 2":"Leeds","name":"1pizza1","outcode":"LS26","lat":"0", "long":"0", "postcode":"0JH","rating":4,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-1st-choice-pizza-ws11/menu","_id":{"$oid":"55f14312c7447c3da7051b3b"},"address":"1 Walsall Road","address line 2":"Cannock","name":"1st Choice Pizza","outcode":"WS11","lat":"0", "long":"0", "postcode":"0HG","rating":4,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-1stclasspizza-bs7/menu","_id":{"$oid":"55f14312c7447c3da7051b3c"},"address":"388 Filton Avenue","address line 2":"Bristol","name":"1st Class Pizza","outcode":"BS7","lat":"0", "long":"0", "postcode":"0BE","rating":"4.5","type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-1stclasspizza-bs7/menu","_id":{"$oid":"55f14312c7447c3da7051b3d"},"address":"388 Filton Avenue","address line 2":"Bristol","name":"1st Class Pizza","outcode":"BS7","lat":"0", "long":"0", "postcode":"0BE","rating":"4.5","type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-1stclasspizza-ng18/menu","_id":{"$oid":"55f14312c7447c3da7051b3e"},"address":"70 Carter Lane","address line 2":"Mansfield","name":"1st Class Pizza","outcode":"NG18","lat":"0", "long":"0", "postcode":"3DH","rating":"4.5","type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-1st-class-pizza-and-kebab-house-nottingham/menu","_id":{"$oid":"55f14312c7447c3da7051b3f"},"address":"470 Vernon Road","address line 2":"Old Basford","name":"1st Class Pizza \u0026 Kebab House","outcode":"NG6","lat":"0", "long":"0", "postcode":"0AT","rating":4,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-241-pizza-ol1/menu","_id":{"$oid":"55f14312c7447c3da7051b40"},"address":"137 Yorkshire Street","address line 2":"Oldham","name":"2 4 1 Pizza","outcode":"OL1","lat":"0", "long":"0", "postcode":"3TH","rating":"5.5","type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-2for1pizza-le10/menu","_id":{"$oid":"55f14312c7447c3da7051b41"},"address":"19 Regent Street","address line 2":"Hinckley","name":"2 for 1 Pizza Place","outcode":"LE10","lat":"0", "long":"0", "postcode":"0AZ","rating":"5.5","type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-2-spice/menu","_id":{"$oid":"55f14312c7447c3da7051b42"},"address":"2 Station Approach","address line 2":"Upminster","name":"2 Spice","outcode":"RM14","lat":"0", "long":"0", "postcode":"2TH","rating":"5.5","type_of_food":"Curry"},
    {"URL":"http://www.just-eat.co.uk/restaurants-1treatu-b26/menu","_id":{"$oid":"55f14312c7447c3da7051b43"},"address":"1776 Coventry Road","address line 2":"Birmingham","name":"2 Treat U","outcode":"B26","lat":"0", "long":"0", "postcode":"1PB","rating":"5.5","type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-23rdstreetpizza-m14/menu","_id":{"$oid":"55f14312c7447c3da7051b44"},"address":"317 Wilmslow Road","address line 2":"Fallowfield","name":"23rd Street Pizza","outcode":"M14","lat":"0", "long":"0", "postcode":"6NW","rating":5,"type_of_food":"American"},
    {"URL":"http://www.just-eat.co.uk/restaurants-23rdstreetpizza-m14/menu","_id":{"$oid":"55f14312c7447c3da7051b45"},"address":"317 Wilmslow Road","address line 2":"Fallowfield","name":"23rd Street Pizza","outcode":"M14","lat":"0", "long":"0", "postcode":"6NW","rating":5,"type_of_food":"American"},
    {"URL":"http://www.just-eat.co.uk/restaurants-241-pizza/menu","_id":{"$oid":"55f14312c7447c3da7051b46"},"address":"107 King Richards Road","address line 2":"Leicester","name":"241 Pizza","outcode":"LE3","lat":"0", "long":"0", "postcode":"5QG","rating":5,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-241pizza-m9/menu","_id":{"$oid":"55f14312c7447c3da7051b47"},"address":"8 Victoria Avenue","address line 2":"Manchester","name":"241 Pizza","outcode":"M9","lat":"0", "long":"0", "postcode":"6QL","rating":"5.5","type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-241pizza-ne38/menu","_id":{"$oid":"55f14312c7447c3da7051b48"},"address":"22 Eddison Road","address line 2":"Newcastle","name":"2-4-1 Pizza","outcode":"NE38","lat":"0", "long":"0", "postcode":"8JH","rating":"4.5","type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-241piza-m34/menu","_id":{"$oid":"55f14312c7447c3da7051b49"},"address":"88 Manchester Road","address line 2":"Manchester","name":"2-4-1 Pizza","outcode":"M34","lat":"0", "long":"0", "postcode":"3PR","rating":5,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-241piza-m34/menu","_id":{"$oid":"55f14312c7447c3da7051b4a"},"address":"88 Manchester Road","address line 2":"Manchester","name":"2-4-1 Pizza","outcode":"M34","lat":"0", "long":"0", "postcode":"3PR","rating":5,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-280degreesafrican-nw6/menu","_id":{"$oid":"55f14312c7447c3da7051b4b"},"address":"280 Kilburn High Road","address line 2":"London","name":"280 Degrees African \u0026 Nigerian Restaurant","outcode":"NW6","lat":"0", "long":"0", "postcode":"2BY","rating":2.5,"type_of_food":"African"},
    {"URL":"http://www.just-eat.co.uk/restaurants-280degreesafrican-nw6/menu","_id":{"$oid":"55f14312c7447c3da7051b4c"},"address":"280 Kilburn High Road","address line 2":"London","name":"280 Degrees African \u0026 Nigerian Restaurant","outcode":"NW6","lat":"0", "long":"0", "postcode":"2BY","rating":2.5,"type_of_food":"African"},
    {"URL":"http://www.just-eat.co.uk/restaurants-3chefsfishbar-de21/menu","_id":{"$oid":"55f14312c7447c3da7051b4d"},"address":"47 Roosevelt Avenue","address line 2":"Derby","name":"3 Chef Fish Bar","outcode":"DE21","lat":"0", "long":"0", "postcode":"6JR","rating":"4.5","type_of_food":"Fish \u0026 Chips"},
    {"URL":"http://www.just-eat.co.uk/restaurants-3chefs-de23/menu","_id":{"$oid":"55f14312c7447c3da7051b4e"},"address":"558 Burton Road","address line 2":"Littleover","name":"3 Chefs","outcode":"DE23","lat":"0", "long":"0", "postcode":"6FP","rating":"4.5","type_of_food":"American"},
    {"URL":"http://www.just-eat.co.uk/restaurants-3in1dunoon-pa23/menu","_id":{"$oid":"55f14312c7447c3da7051b4f"},"address":"45 Argyll Street DUNOON","address line 2":"Argyll","name":"3 In 1 Dunoon","outcode":"PA23","lat":"0", "long":"0", "postcode":"7HG","rating":5,"type_of_food":"Curry"},
    {"URL":"http://www.just-eat.co.uk/restaurants-3in1-indian-cuisine-g78/menu","_id":{"$oid":"55f14312c7447c3da7051b50"},"address":"58 Aurs Drive","address line 2":"Barrhead","name":"3 in 1 Indian \u0026 Chipshop Barrhead","outcode":"G78","lat":"0", "long":"0", "postcode":"2LW","rating":"4.5","type_of_food":"English"},
    {"URL":"http://www.just-eat.co.uk/restaurants-3in1xtra/menu","_id":{"$oid":"55f14312c7447c3da7051b51"},"address":"67-69 Elmbank Street","address line 2":"Glasgow","name":"3 In 1 Xtra","outcode":"G2","lat":"0", "long":"0", "postcode":"4PQ","rating":4,"type_of_food":"Curry"},
    {"URL":"http://www.just-eat.co.uk/restaurants-3in1xtra/menu","_id":{"$oid":"55f14312c7447c3da7051b52"},"address":"67-69 Elmbank Street","address line 2":"Glasgow","name":"3 In 1 Xtra","outcode":"G2","lat":"0", "long":"0", "postcode":"4PQ","rating":4,"type_of_food":"Curry"},
    {"URL":"http://www.just-eat.co.uk/restaurants-3in1xtra/menu","_id":{"$oid":"55f14312c7447c3da7051b53"},"address":"67-69 Elmbank Street","address line 2":"Glasgow","name":"3 In 1 Xtra","outcode":"G2","lat":"0", "long":"0", "postcode":"4PQ","rating":4,"type_of_food":"Curry"},
    {"URL":"http://www.just-eat.co.uk/restaurants-321/menu","_id":{"$oid":"55f14312c7447c3da7051b54"},"address":"148 St.Georges Road","address line 2":"Cheltenham","name":"321 Pizzas, Kebabs \u0026 Burgers","outcode":"GL50","lat":"0", "long":"0", "postcode":"3EL","rating":"5.5","type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-328chineseonline-cf81/menu","_id":{"$oid":"55f14312c7447c3da7051b55"},"address":"2-4 Commercial Street","address line 2":"Aberbargoed","name":"328 Chinese Online","outcode":"CF81","lat":"0", "long":"0", "postcode":"9BW","rating":5,"type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-333-Chinese-FY4/menu","_id":{"$oid":"55f14312c7447c3da7051b56"},"address":"276 Waterloo Road","address line 2":"Blackpool","name":"333 Chinese Takeaway","outcode":"FY4","lat":"0", "long":"0", "postcode":"3AF","rating":5,"type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-333Chinese-G13/menu","_id":{"$oid":"55f14312c7447c3da7051b57"},"address":"1550 Great Western Road","address line 2":"Glasgow","name":"333 Chinese Takeaway","outcode":"G13","lat":"0", "long":"0", "postcode":"1HJ","rating":5,"type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-333Chinese-M11/menu","_id":{"$oid":"55f14312c7447c3da7051b58"},"address":"1276 Ashton Old Road","address line 2":"Manchester","name":"333 Chinese Takeaway1","outcode":"M11","lat":"0", "long":"0", "postcode":"1JJ","rating":"4.5","type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-350wok-ws10/menu","_id":{"$oid":"55f14312c7447c3da7051b59"},"address":"136A Crankhall Lane","address line 2":"Wednesbury","name":"350 Wok","outcode":"WS10","lat":"0", "long":"0", "postcode":"0ED","rating":"5.5","type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-350wok-ws10/menu","_id":{"$oid":"55f14312c7447c3da7051b5a"},"address":"136A Crankhall Lane","address line 2":"Wednesbury","name":"350 Wok","outcode":"WS10","lat":"0", "long":"0", "postcode":"0ED","rating":"5.5","type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-350wok-ws10/menu","_id":{"$oid":"55f14312c7447c3da7051b5b"},"address":"136A Crankhall Lane","address line 2":"Wednesbury","name":"350 Wok","outcode":"WS10","lat":"0", "long":"0", "postcode":"0ED","rating":"5.5","type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-4in1-Express-CH41/menu","_id":{"$oid":"55f14312c7447c3da7051b5c"},"address":"122 Duke Street","address line 2":"Birkenhead","name":"4 in 1 Express","outcode":"CH41","lat":"0", "long":"0", "postcode":"8BT","rating":5,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-4inlove-pe30/menu","_id":{"$oid":"55f14312c7447c3da7051b5d"},"address":"10-12 Railway Road","address line 2":"Norfolk","name":"4 in Love","outcode":"PE30","lat":"0", "long":"0", "postcode":"1NE","rating":"5.5","type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-4500-miles-from-delhi-bristol/menu","_id":{"$oid":"55f14312c7447c3da7051b5e"},"address":"8 Colston Avenue","address line 2":"Bristol","name":"4500 Miles From Delhi","outcode":"BS1","lat":"0", "long":"0", "postcode":"4ST","rating":4,"type_of_food":"Curry"},
    {"URL":"http://www.just-eat.co.uk/restaurants-4seasonspizzaandgrill-dy3/menu","_id":{"$oid":"55f14312c7447c3da7051b5f"},"address":"12-14 High Street","address line 2":"Dudley","name":"4 Seasons Pizza \u0026 Grill","outcode":"DY3","lat":"0", "long":"0", "postcode":"1RW","rating":5,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-4550milesfromdelhi-ng1/menu","_id":{"$oid":"55f14312c7447c3da7051b60"},"address":"41 Mount Street","address line 2":"Nottinghamshire","name":"4550 Miles From Delhi - Collection Only","outcode":"NG1","lat":"0", "long":"0", "postcode":"6HE","rating":"Not yet rated","type_of_food":"Curry"},
    {"URL":"http://www.just-eat.co.uk/restaurants-5in1-pr3/menu","_id":{"$oid":"55f14312c7447c3da7051b61"},"address":"23 Berry Lane","address line 2":"Longridge","name":"5 In 1 Takeaway","outcode":"PR3","lat":"0", "long":"0", "postcode":"3JA","rating":5,"type_of_food":"Curry"},
    {"URL":"http://www.just-eat.co.uk/restaurants-5n1-dd8/menu","_id":{"$oid":"55f14312c7447c3da7051b62"},"address":"126 Castle Street","address line 2":"Forfar","name":"5 'N' 1","outcode":"DD8","lat":"0", "long":"0", "postcode":"2HS","rating":"4.5","type_of_food":"Curry"},
    {"URL":"http://www.just-eat.co.uk/restaurants-5-star-chinese-archway/menu","_id":{"$oid":"55f14312c7447c3da7051b63"},"address":"362 Hornsey Road","address line 2":"London","name":"5 Star Chinese","outcode":"N19","lat":"0", "long":"0", "postcode":"4HD","rating":5,"type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-5-star-chinese-archway/menu","_id":{"$oid":"55f14312c7447c3da7051b64"},"address":"362 Hornsey Road","address line 2":"London","name":"5 Star Chinese","outcode":"N19","lat":"0", "long":"0", "postcode":"4HD","rating":5,"type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-5-star-falafel--gh-butchers-kingsbury/menu","_id":{"$oid":"55f14312c7447c3da7051b65"},"address":"423 Kingsbury Road","address line 2":"London","name":"5 Star Falafel @ GH Butchers","outcode":"NW9","lat":"0", "long":"0", "postcode":"9DT","rating":"Not yet rated","type_of_food":"Lebanese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-5-star-falafel--gh-butchers-kingsbury/menu","_id":{"$oid":"55f14312c7447c3da7051b66"},"address":"423 Kingsbury Road","address line 2":"London","name":"5 Star Falafel @ GH Butchers","outcode":"NW9","lat":"0", "long":"0", "postcode":"9DT","rating":"Not yet rated","type_of_food":"Lebanese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-5-star-fish-bar/menu","_id":{"$oid":"55f14312c7447c3da7051b67"},"address":"103 Stafford Street","address line 2":"Walsall","name":"5 Star Fish Bar","outcode":"WS2","lat":"0", "long":"0", "postcode":"8DX","rating":5,"type_of_food":"American"},
    {"URL":"http://www.just-eat.co.uk/restaurants-5starpizza-ha9/menu","_id":{"$oid":"55f14312c7447c3da7051b68"},"address":"379 High Road","address line 2":"Wembley","name":"5 Star Pizza","outcode":"HA9","lat":"0", "long":"0", "postcode":"6AA","rating":2.5,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-5starpizza-ha9/menu","_id":{"$oid":"55f14312c7447c3da7051b69"},"address":"379 High Road","address line 2":"Wembley","name":"5 Star Pizza","outcode":"HA9","lat":"0", "long":"0", "postcode":"6AA","rating":2.5,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-5starpizza-ha9/menu","_id":{"$oid":"55f14312c7447c3da7051b6a"},"address":"379 High Road","address line 2":"Wembley","name":"5 Star Pizza","outcode":"HA9","lat":"0", "long":"0", "postcode":"6AA","rating":2.5,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-5starpizza-ha9/menu","_id":{"$oid":"55f14312c7447c3da7051b6b"},"address":"379 High Road","address line 2":"Wembley","name":"5 Star Pizza","outcode":"HA9","lat":"0", "long":"0", "postcode":"6AA","rating":2.5,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-5starpizza-b70/menu","_id":{"$oid":"55f14312c7447c3da7051b6c"},"address":"104 Hiltop Road","address line 2":"West Bromich","name":"5 Star Pizza","outcode":"B70","lat":"0", "long":"0", "postcode":"0SH","rating":5,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-5starpizza-b70/menu","_id":{"$oid":"55f14312c7447c3da7051b6d"},"address":"104 Hiltop Road","address line 2":"West Bromich","name":"5 Star Pizza","outcode":"B70","lat":"0", "long":"0", "postcode":"0SH","rating":5,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-5starpizza-b70/menu","_id":{"$oid":"55f14312c7447c3da7051b6e"},"address":"104 Hiltop Road","address line 2":"West Bromich","name":"5 Star Pizza","outcode":"B70","lat":"0", "long":"0", "postcode":"0SH","rating":5,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-555hotcurry-ct12/menu","_id":{"$oid":"55f14312c7447c3da7051b6f"},"address":"17-19 Northwood Road","address line 2":"Kent","name":"555 Hot Curry","outcode":"CT12","lat":"0", "long":"0", "postcode":"6RR","rating":4,"type_of_food":"Curry"},
    {"URL":"http://www.just-eat.co.uk/restaurants-555pizza-ct1/menu","_id":{"$oid":"55f14312c7447c3da7051b70"},"address":"72 Castle Street","address line 2":"Canterbury","name":"555 Pizza","outcode":"CT1","lat":"0", "long":"0", "postcode":"2QD","rating":"4.5","type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-555pizzaandkebab-ct12/menu","_id":{"$oid":"55f14312c7447c3da7051b71"},"address":"15 Northwood Road","address line 2":"Kent","name":"555 Pizza \u0026 Kebab","outcode":"CT12","lat":"0", "long":"0", "postcode":"6RR","rating":"4.5","type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-57-orient-takeawayPR8/menu","_id":{"$oid":"55f14312c7447c3da7051b72"},"address":"81 Upper Aughton Road","address line 2":"Southport","name":"57 Orient Takeaway","outcode":"PR8","lat":"0", "long":"0", "postcode":"5ND","rating":"4.5","type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-62worksop-s80/menu","_id":{"$oid":"55f14312c7447c3da7051b73"},"address":"62 Newcastle Avenue","address line 2":"Worksop","name":"62 Worksop Fish Bar","outcode":"S80","lat":"0", "long":"0", "postcode":"1LA","rating":5,"type_of_food":"Fish \u0026 Chips"},
    {"URL":"http://www.just-eat.co.uk/restaurants-64pizzeria-ls4/menu","_id":{"$oid":"55f14312c7447c3da7051b74"},"address":"64 Burley Road","address line 2":"Leeds","name":"64 Pizzeria","outcode":"LS3","lat":"0", "long":"0", "postcode":"1JX","rating":"5.5","type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-7andone-bt53/menu","_id":{"$oid":"55f14312c7447c3da7051b75"},"address":"3 Charles Street","address line 2":"County Antrim","name":"7 \u0026 One","outcode":"BT53","lat":"0", "long":"0", "postcode":"6DX","rating":"5.5","type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-7oaksgrilltn13/menu","_id":{"$oid":"55f14312c7447c3da7051b76"},"address":"127 St Johns Hill","address line 2":"Sevenoaks","name":"7 Oaks Grill","outcode":"TN13","lat":"0", "long":"0", "postcode":"3PE","rating":"4.5","type_of_food":"English"},
    {"URL":"http://www.just-eat.co.uk/restaurants-7spices-s3/menu","_id":{"$oid":"55f14312c7447c3da7051b77"},"address":"Mayfair Court","address line 2":"Sheffield","name":"7 Spices","outcode":"S3","lat":"0", "long":"0", "postcode":"8PP","rating":5,"type_of_food":"Curry"},
    {"URL":"http://www.just-eat.co.uk/restaurants-7Spices-LS6/menu","_id":{"$oid":"55f14312c7447c3da7051b78"},"address":"203-205 Woodhouse Street","address line 2":"Leeds","name":"7 Spices","outcode":"LS6","lat":"0", "long":"0", "postcode":"2NY","rating":5,"type_of_food":"Curry"},
    {"URL":"http://www.just-eat.co.uk/restaurants-7spices-g32/menu","_id":{"$oid":"55f14312c7447c3da7051b79"},"address":"975 Carntyne Road","address line 2":"Glasgow","name":"7 Spices Takeaway","outcode":"G32","lat":"0", "long":"0", "postcode":"6LY","rating":"4.5","type_of_food":"Curry"},
    {"URL":"http://www.just-eat.co.uk/restaurants-7star-ne6/menu","_id":{"$oid":"55f14312c7447c3da7051b7a"},"address":"824 Shields Road","address line 2":"Newcastle","name":"7 STAR Pizza","outcode":"NE6","lat":"0", "long":"0", "postcode":"4QN","rating":"5.5","type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-7star-ne6/menu","_id":{"$oid":"55f14312c7447c3da7051b7b"},"address":"824 Shields Road","address line 2":"Newcastle","name":"7 STAR Pizza","outcode":"NE6","lat":"0", "long":"0", "postcode":"4QN","rating":"5.5","type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-7star-ne6/menu","_id":{"$oid":"55f14312c7447c3da7051b7c"},"address":"824 Shields Road","address line 2":"Newcastle","name":"7 STAR Pizza","outcode":"NE6","lat":"0", "long":"0", "postcode":"4QN","rating":"5.5","type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-7starspices-g52/menu","_id":{"$oid":"55f14312c7447c3da7051b7d"},"address":"828 Mosspark Drive","address line 2":"Lanarkshire","name":"7 Star Spices","outcode":"G52","lat":"0", "long":"0", "postcode":"3DA","rating":"5.5","type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-700degrees-gu51/menu","_id":{"$oid":"55f14312c7447c3da7051b7e"},"address":"192-196 Fleet Road","address line 2":"Hampshire","name":"700 Degrees","outcode":"GU51","lat":"0", "long":"0", "postcode":"4BY","rating":"4.5","type_of_food":"Chicken"},
    {"URL":"http://www.just-eat.co.uk/restaurants-88-chinese-millbrook/menu","_id":{"$oid":"55f14312c7447c3da7051b7f"},"address":"44 London Road","address line 2":"Southampton","name":"88 Chinese","outcode":"SO15","lat":"0", "long":"0", "postcode":"2AH","rating":5,"type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-88noodlebar-hd1/menu","_id":{"$oid":"55f14312c7447c3da7051b80"},"address":"15 Cross Church Street","address line 2":"Huddersfield","name":"88 Noodle Bar","outcode":"HD1","lat":"0", "long":"0", "postcode":"2PY","rating":4,"type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-888chinese-so23/menu","_id":{"$oid":"55f14312c7447c3da7051b81"},"address":"77 North Walls","address line 2":"Winchester","name":"888 Chinese Takeaway","outcode":"SO23","lat":"0", "long":"0", "postcode":"8DA","rating":5,"type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-888tripleeight-bh9/menu","_id":{"$oid":"55f14312c7447c3da7051b82"},"address":"888 Wimborne Road","address line 2":"Bournemouth","name":"888 Triple Eight","outcode":"BH9","lat":"0", "long":"0", "postcode":"2DR","rating":5,"type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-9cfc/menu","_id":{"$oid":"55f14312c7447c3da7051b83"},"address":"7 Shopping Precinct","address line 2":"Featherstone","name":"9 Inch CFC","outcode":"WF7","lat":"0", "long":"0", "postcode":"5BX","rating":5,"type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-9thavenuepizzeria-bt78/menu","_id":{"$oid":"55f14312c7447c3da7051b84"},"address":"9 Dromore Road","address line 2":"Omagh","name":"9th Avenue Pizzeria","outcode":"BT78","lat":"0", "long":"0", "postcode":"1QZ","rating":"5.5","type_of_food":"Pizza"},
    {"URL":"http://www.just-eat.co.uk/restaurants-9thkitchen-b26/menu","_id":{"$oid":"55f14312c7447c3da7051b85"},"address":"397 Sheldon Heath Road","address line 2":"Sheldon","name":"9th Kitchen","outcode":"B26","lat":"0", "long":"0", "postcode":"2UB","rating":5,"type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-A-G-Kitchen-M40/menu","_id":{"$oid":"55f14312c7447c3da7051b86"},"address":"267 Nuthurst Road","address line 2":"Manchester","name":"A \u0026 G Kitchen","outcode":"M40","lat":"0", "long":"0", "postcode":"3PU","rating":5,"type_of_food":"Chinese"},
    {"URL":"http://www.just-eat.co.uk/restaurants-a-and-t-mundi-house-iffley/menu","_id":{"$oid":"55f14312c7447c3da7051b87"},"address":"64 Cowley Road","address line 2":"","name":"A \u0026 T Mundi House","outcode":"OX4","lat":"0", "long":"0", "postcode":"1JB","rating":"4.5","type_of_food":"Arabic"},
    {"URL":"http://www.just-eat.co.uk/restaurants-a-cake-a-shake-stockport/menu","_id":{"$oid":"55f14312c7447c3da7051b88"},"address":"8B - 12B Houldsworth Street","address line 2":"Stockport","name":"A Cake A Shake","outcode":"SK5","lat":"0", "long":"0", "postcode":"6DA","rating":"4.5","type_of_food":"Desserts"},
    {"URL":"http://www.just-eat.co.uk/restaurants-a-cake-a-shake-stockport/menu","_id":{"$oid":"55f14312c7447c3da7051b89"},"address":"8B - 12B Houldsworth Street","address line 2":"Stockport","name":"A Cake A Shake","outcode":"SK5","lat":"0", "long":"0", "postcode":"6DA","rating":"4.5","type_of_food":"Desserts"}
]


const featured = [
    {
        id:0,
        type:"featured",
        name:"Offers near you!",
        short_description:"Support new local restaurants near you!",
        restaurants : [
            {"imgUrl":"https://img.freepik.com/free-photo/bowl-pork-knuckle-noodles_1205-13743.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph","_id":"55f14312c7447c3da7051b26","address":"228 City Road","address line 2":"Cardiff","name":"Mr. Choy's Chinese","outcode":"CF24","lat":"0", "long":"0", "postcode":"3JH","rating":"5","type_of_food":"Chinese", 
            "dishes":[
                {
                  _id: 1,
                  name: "Kung Pao Chicken",
                  price: 12.99,
                  image: "https://img.freepik.com/premium-photo/food-images-any-restaurant_249033-13.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Spicy stir-fried chicken with peanuts and vegetables."
                },
                {
                  _id: 2,
                  name: "Dumplings",
                  price: 8.99,
                  image: "https://img.freepik.com/free-photo/front-view-raw-little-dumplings-little-dough-pieces-gray-surface-cuisine-dish-dough-cake-dinner-meal-cooking-meat_179666-17563.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph",
                  short_description: "Steamed or fried dumplings filled with meat and vegetables."
                },
                {
                  _id: 3,
                  name: "Peking Duck",
                  price: 22.99,
                  image: "https://img.freepik.com/free-photo/top-view-traditional-asian-food-peking-duck-with-cucumbers-sauce-plate_141793-8524.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Roasted duck served with thin pancakes and hoisin sauce."
                },
                {
                  _id: 4,
                  name: "Sweet and Sour Pork",
                  price: 10.99,
                  image: "https://img.freepik.com/free-photo/yunan-pork-stewed-gravy_640221-226.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Crispy pork with a sweet and tangy sauce."
                },
                {
                  _id: 5,
                  name: "General Tso's Chicken",
                  price: 13.99,
                  image: "https://img.freepik.com/free-photo/delicious-goulash-table-still-life-top-view_23-2149388142.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Deep-fried chicken in a spicy and sweet sauce."
                },
                {
                  _id: 6,
                  name: "Egg Fried Rice",
                  price: 7.99,
                  image: "https://img.freepik.com/premium-photo/indian-vegetable-pulav-biryani-made-using-basmati-rice-served-terracotta-bowl-selective-focus_466689-55615.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Stir-fried rice with scrambled eggs and vegetables."
                },
                {
                  _id: 7,
                  name: "Mongolian Beef",
                  price: 14.99,
                  image: "https://img.freepik.com/free-photo/stir-frying-beef-with-sweet-peppers-green-beans_2829-20101.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Savory beef stir-fry with green onions and a soy-based sauce."
                },
                {
                  _id: 8,
                  name: "Mapo Tofu",
                  price: 9.99,
                  image: "https://img.freepik.com/premium-photo/fried-teriyaki-tofu-with-scallions-sesame-seeds-healthy-vegan-meatless-meal-rich-protein-calcium-trendy-hard-light-dark-shadow-plaster-background-close-up_164638-20969.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Spicy tofu and minced meat dish with Sichuan peppercorns."
                },
                {
                  _id: 9,
                  name: "Chow Mein",
                  price: 10.99,
                  image: "https://img.freepik.com/free-photo/flat-lay-noodles-with-vegetables-chicken_23-2148377422.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Stir-fried noodles with vegetables and meat or tofu."
                },
                {
                  _id: 10,
                  name: "Hot and Sour Soup",
                  price: 6.99,
                  image: "https://img.freepik.com/premium-photo/tom-yam-kung-spicy-thai-soup-with-shrimp-seafood-coconut-milk-chili-pepper-bowl-copy-space_182067-3359.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Spicy and tangy soup with mushrooms, tofu, and bamboo shoots."
                }
              ]},
            {"imgUrl":"https://img.freepik.com/free-photo/spicy-fried-tubtim-fish-salad-spicy-thai-food_1150-26481.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph","_id":"55f14312c7447c3da7051b27","address":"376 Rayleigh Road","address line 2":"Essex","name":"Mun-Thai","outcode":"SS9","lat":"0", "long":"0", "postcode":"5PT","rating":"5.5","type_of_food":"Thai", 
            "dishes":[{
                _id: 1,
                name: "Pad Thai",
                price: 11.99,
                image: "https://img.freepik.com/free-photo/dinner-noodle-chicken-cuisine-food_1203-4417.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                short_description: "Stir-fried rice noodles with shrimp, tofu, peanuts, and tamarind sauce."
              },
              {
                _id: 2,
                name: "Green Curry",
                price: 12.99,
                image: "https://img.freepik.com/free-photo/green-curry-bowl-with-lime-red-onion-lemon-grass-garlic-kaffir-lime-leaves_1150-21367.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                short_description: "Spicy Thai curry with coconut milk and vegetables."
              },
              {
                _id: 3,
                name: "Tom Yum Goong",
                price: 9.99,
                image: "https://img.freepik.com/free-photo/thai-food-tom-yum-kung-river-prawn-spicy-soup_1150-35451.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                short_description: "Hot and sour shrimp soup with lemongrass and Thai herbs."
              },
              {
                _id: 4,
                name: "Massaman Curry",
                price: 14.99,
                image: "https://img.freepik.com/free-photo/top-view-bowl-homemade-stew-pepper_23-2148494757.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                short_description: "Rich and creamy curry with tender meat, potatoes, and peanuts."
              },
              {
                _id: 5,
                name: "Som Tum",
                price: 8.99,
                image: "https://img.freepik.com/free-photo/thai-food-tom-yum-kung-river-prawn-spicy-soup_1150-35452.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                short_description: "Spicy green papaya salad with tomatoes, peanuts, and lime."
              },
              {
                _id: 6,
                name: "Pad Krapow Moo Saap",
                price: 10.99,
                image: "https://img.freepik.com/free-photo/spicy-minced-chicken-white-plate-complete-with-cucumber-lettuce-side-dishes_1150-23194.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                short_description: "Stir-fried minced pork with basil and chili, served with rice and a fried egg."
              },
              {
                _id: 7,
                name: "Khao Soi",
                price: 13.99,
                image: "https://img.freepik.com/free-photo/chicken-curry-black-cup-with-rice-noodles_1150-23809.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                short_description: "Northern Thai noodle soup with a creamy coconut curry broth."
              },
              {
                _id: 8,
                name: "Panang Curry",
                price: 12.99,
                image: "https://img.freepik.com/premium-photo/pork-panang-curry-red-curry-with-pork-thai-food_62856-5558.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                short_description: "Rich and nutty curry with a hint of sweetness, often served with beef or chicken."
              },
              {
                _id: 9,
                name: "Kai Med Ma Muang",
                price: 10.99,
                image: "https://img.freepik.com/free-photo/side-view-meat-stew-lamb-stew-with-fried-onion-dried-fruits-with-rice-plate_141793-5013.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                short_description: "Stir-fried chicken with cashew nuts, vegetables, and a savory sauce."
              },
              {
                _id: 10,
                name: "Sticky Rice with Mango",
                price: 6.99,
                image: "https://img.freepik.com/free-photo/ripe-mango-sticky-rice-with-coconut-milk-stone-surface-thai-sweet-dessert-summer-season_1150-44897.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                short_description: "Sweet dessert of sticky rice topped with ripe mango slices."
              }
            ]},
            {"imgUrl":"https://img.freepik.com/premium-photo/top-view-delicious-pakistani-dish_23-2148825144.jpg?w=740","_id":"55f14312q7447c3da7251b2a","address":"9 Broughton Hall Road","address line 2":"Broughton","name":"India-co","outcode":"CH4","lat":"0", "long":"0", "postcode":"0QR","rating":"6","type_of_food":"Curry", 
            "dishes":[
                {
                  _id: 1,
                  name: "Chicken Tikka Masala",
                  price: 14.99,
                  image: "https://img.freepik.com/premium-photo/chicken-curry-masala-kerala-style-chicken-curry-using-fried-coconut-traditional-way_527904-1716.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Grilled chicken in a rich tomato-based curry sauce."
                },
                {
                  _id: 2,
                  name: "Paneer Butter Masala",
                  price: 12.99,
                  image: "https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Soft paneer cubes in a creamy and buttery tomato-based curry."
                },
                {
                  _id: 3,
                  name: "Beef Rendang",
                  price: 15.99,
                  image: "https://img.freepik.com/premium-photo/delicious-carrot-beef-brisket-casserole_1205-12295.jpg?w=1060",
                  short_description: "Indonesian spicy meat dish slow-cooked in coconut milk and spices."
                },
                {
                  _id: 4,
                  name: "Aloo Gobi",
                  price: 9.99,
                  image: "https://img.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine_2829-4415.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Classic Indian dish with potatoes and cauliflower in a fragrant curry."
                },
                {
                  _id: 5,
                  name: "Thai Green Curry",
                  price: 13.99,
                  image: "https://img.freepik.com/free-photo/green-curry-bowl-with-lime-red-onion-lemon-grass-garlic-kaffir-lime-leaves_1150-21365.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Spicy and aromatic curry with green chili paste and coconut milk."
                },
                {
                  _id: 6,
                  name: "Lamb Korma",
                  price: 16.99,
                  image: "https://img.freepik.com/free-photo/delicious-goulash-ready-dinner_23-2149370903.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Mild and creamy curry with tender pieces of lamb and nuts."
                },
                {
                  _id: 7,
                  name: "Dal Makhani",
                  price: 10.99,
                  image: "https://img.freepik.com/free-photo/chicken-red-curry-black-cup_1150-23925.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Creamy lentil curry slow-cooked with butter and spices."
                },
                {
                  _id: 8,
                  name: "Red Curry with Shrimp",
                  price: 14.99,
                  image: "https://img.freepik.com/free-photo/high-angle-delicious-shrimp-meal_23-2148771278.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Spicy and tangy Thai curry with succulent shrimp."
                },
                {
                  _id: 9,
                  name: "Chana Masala",
                  price: 11.99,
                  image: "https://img.freepik.com/free-photo/fresh-soup-with-spices_144627-34284.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Spiced chickpea curry with aromatic spices."
                },
                {
                  _id: 10,
                  name: "Egg Curry",
                  price: 8.99,
                  image: "https://img.freepik.com/free-photo/top-view-white-pot-shakshuka-with-eggs-fresh-herbs-wooden-surface_181624-58650.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Hard-boiled eggs in a flavorful curry sauce."
                }
              ]},
            {"imgUrl":"https://img.freepik.com/free-photo/couscous-with-lamb-sweet-sour-tomato-sauce_155003-422.jpg?w=1060&t=st=1692928214~exp=1692928814~hmac=047ead157a57bbc31e6aa2e0285435e0ddd984e51a716b7299954c2e7a006aef","_id":"55f14312c7447c3da7051b28","address":"30 Greyhound Road Hammersmith","address line 2":"London","name":"Thaiti Restaurant","outcode":"W6","lat":"0", "long":"0", "postcode":"8NX","rating":"4.5","type_of_food":"Thai", 
            "dishes":[
                {
                  _id: 1,
                  name: "Pad Thai",
                  price: 11.99,
                  image: "https://img.freepik.com/free-photo/high-angle-tasty-composition-noodles-table_23-2148803860.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Stir-fried rice noodles with shrimp, tofu, peanuts, and tamarind sauce."
                },
                {
                  _id: 2,
                  name: "Green Curry",
                  price: 12.99,
                  image: "https://img.freepik.com/free-photo/delicious-pakistani-dish-high-angle_23-2148825127.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Spicy Thai curry with coconut milk and vegetables."
                },
                {
                  _id: 3,
                  name: "Tom Yum Goong",
                  price: 9.99,
                  image: "https://img.freepik.com/free-photo/thai-food-tom-yum-kung-river-prawn-spicy-soup_1150-35452.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Hot and sour shrimp soup with lemongrass and Thai herbs."
                },
                {
                  _id: 4,
                  name: "Massaman Curry",
                  price: 14.99,
                  image: "https://img.freepik.com/free-photo/delicious-goulash-stew-table_23-2149371726.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Rich and creamy curry with tender meat, potatoes, and peanuts."
                },
                {
                  _id: 5,
                  name: "Som Tum",
                  price: 8.99,
                  image: "https://img.freepik.com/premium-photo/som-tum-thai-spicy-green-papaya-salad-with-salty-eggs-asian-food-style_1339-150362.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Spicy green papaya salad with tomatoes, peanuts, and lime."
                },
                {
                  _id: 6,
                  name: "Pad Krapow Moo Saap",
                  price: 10.99,
                  image: "https://img.freepik.com/free-photo/rice-with-basil-minced-pork_1150-26774.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Stir-fried minced pork with basil and chili, served with rice and a fried egg."
                },
                {
                  _id: 7,
                  name: "Khao Soi",
                  price: 13.99,
                  image: "https://img.freepik.com/premium-photo/khao-soi-kai-top-viewdelicious-northern-thai-food_116825-165.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Northern Thai noodle soup with a creamy coconut curry broth."
                },
                {
                  _id: 8,
                  name: "Panang Curry",
                  price: 12.99,
                  image: "https://img.freepik.com/premium-photo/tasty-chicken-curry-pan-spices-wooden_392895-8504.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Rich and nutty curry with a hint of sweetness, often served with beef or chicken."
                },
                {
                  _id: 9,
                  name: "Kai Med Ma Muang",
                  price: 10.99,
                  image: "https://img.freepik.com/free-photo/top-view-nachos-with-cheese-with-spices-sauce-croutons-table_141793-14329.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Stir-fried chicken with cashew nuts, vegetables, and a savory sauce."
                }
              ]},
            {"imgUrl":"https://img.freepik.com/free-photo/food-mix-salad-noodles-grillea-chicken-garlic-greena-top-view_141793-15488.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph","_id":"55f14312c7447c3da7051b2f","address":"Unit 4 Spencer House","address line 2":"Swalwell","name":"12 Chinese Eyes","outcode":"NE16","lat":"0", "long":"0", "postcode":"3DS","rating":"4.5","type_of_food":"Chinese", 
            "dishes":[
                {
                  _id: 1,
                  name: "General Tso's Chicken",
                  price: 11.99,
                  image: "https://img.freepik.com/free-photo/fried-chicken-vegetables-sauce-with-sesame_141793-92.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Crispy chicken in a sweet and spicy sauce."
                },
                {
                  _id: 2,
                  name: "Kung Pao Shrimp",
                  price: 13.99,
                  image: "https://img.freepik.com/free-photo/side-view-fried-shrimps-with-red-green-peppers-wooden-cutting-board_141793-2642.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Spicy stir-fried shrimp with peanuts and vegetables."
                },
                {
                  _id: 3,
                  name: "Beef with Broccoli",
                  price: 12.99,
                  image: "https://img.freepik.com/premium-photo/horizontal-shot-delicious-better-than-takeout-beef-with-broccoli-3d-illustrated_768106-791.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Savory beef stir-fry with tender broccoli."
                },
                {
                  _id: 4,
                  name: "Dumplings",
                  price: 9.99,
                  image: "https://img.freepik.com/free-photo/high-angle-japanese-dumplings-assortment_23-2148809860.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph",
                  short_description: "Steamed or fried dumplings filled with meat and vegetables."
                },
                {
                  _id: 5,
                  name: "Egg Fried Rice",
                  price: 7.99,
                  image: "https://img.freepik.com/free-photo/steamed-rice-with-seafood-calamary-corns-carrot-peas-side-view_141793-3564.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Classic fried rice with scrambled eggs and vegetables."
                },
                {
                  _id: 6,
                  name: "Peking Duck",
                  price: 16.99,
                  image: "https://img.freepik.com/premium-photo/asian-cuisine-roasted-duck-meat-with-skin_1472-40193.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Roasted duck served with pancakes, scallions, and hoisin sauce."
                },
                {
                  _id: 7,
                  name: "Sweet and Sour Pork",
                  price: 10.99,
                  image: "https://img.freepik.com/free-photo/dish-roasted-meat-with-sauce-some-greens-white-sauce-served-plate_181624-32121.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Crispy pork with a tangy sweet and sour sauce."
                },
                {
                  _id: 9,
                  name: "Spring Rolls",
                  price: 8.99,
                  image: "https://img.freepik.com/free-photo/kegs-pancakes-with-red-fish_2829-13749.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Crispy rolls filled with vegetables, pork, and shrimp."
                },
                {
                  _id: 10,
                  name: "Mongolian Beef",
                  price: 14.99,
                  image: "https://img.freepik.com/free-photo/sac-qovurmasi-turshu-govurma-local-food-inside-black-sac-with-herbs_114579-1882.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Tender beef stir-fry with scallions in a savory sauce."
                }
              ]},
            {"imgUrl":"https://img.freepik.com/premium-photo/pizza-black-background-illustration-images_796580-21.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph","_id":"55f14312c7447c3da7051b3a","address":"160 Leeds Road","address line 2":"Leeds","name":"1-pi22a-1","outcode":"LS26","lat":"0", "long":"0", "postcode":"0JH","rating":"4","type_of_food":"Pizza",
             "dishes":[
                {
                  _id: 1,
                  name: "Margherita Pizza",
                  price: 10.99,
                  image: "margherita_pizza.jpg",
                  short_description: "Classic pizza with tomato, mozzarella, and basil."
                },
                {
                  _id: 2,
                  name: "Pepperoni Pizza",
                  price: 12.99,
                  image: "pepperoni_pizza.jpg",
                  short_description: "Pizza topped with pepperoni slices and melted cheese."
                },
                {
                  _id: 3,
                  name: "Hawaiian Pizza",
                  price: 11.99,
                  image: "hawaiian_pizza.jpg",
                  short_description: "Pizza with ham, pineapple, and cheese, a sweet and savory combination."
                },
                {
                  _id: 4,
                  name: "Supreme Pizza",
                  price: 14.99,
                  image: "supreme_pizza.jpg",
                  short_description: "Loaded pizza with a variety of toppings like sausage, peppers, and olives."
                },
                {
                  _id: 5,
                  name: "Vegetarian Pizza",
                  price: 13.99,
                  image: "vegetarian_pizza.jpg",
                  short_description: "Pizza piled high with a colorful assortment of vegetables."
                },
                {
                  _id: 6,
                  name: "BBQ Chicken Pizza",
                  price: 12.99,
                  image: "bbq_chicken_pizza.jpg",
                  short_description: "Pizza topped with BBQ sauce, grilled chicken, and red onions."
                },
                {
                  _id: 7,
                  name: "Mushroom Pizza",
                  price: 10.99,
                  image: "mushroom_pizza.jpg",
                  short_description: "Pizza with a variety of mushrooms and gooey melted cheese."
                },
                {
                  _id: 8,
                  name: "Meat Lovers Pizza",
                  price: 15.99,
                  image: "meat_lovers_pizza.jpg",
                  short_description: "Pizza loaded with various types of meat like sausage, bacon, and pepperoni."
                },
                {
                  _id: 9,
                  name: "White Pizza",
                  price: 11.99,
                  image: "white_pizza.jpg",
                  short_description: "Pizza without tomato sauce, often with ricotta, mozzarella, and garlic."
                },
                {
                  _id: 10,
                  name: "Buffalo Chicken Pizza",
                  price: 13.99,
                  image: "buffalo_chicken_pizza.jpg",
                  short_description: "Pizza featuring spicy buffalo chicken and a drizzle of ranch dressing."
                }
              ]}
        ]
    },
    {
        id:1,
        type:"featured",
        name:"Featured",
        short_description:"Paid placements from our partners!",
        restaurants : [
            {"imgUrl":"https://img.freepik.com/free-photo/pizza-pepperoni-table_140725-7426.jpg?w=740&t=st=1692927783~exp=1692928383~hmac=313826c460614588efe3611caa415db743193cf0ddbbcf5d5a1b1c7092114de5","_id":"55f14312c7447c3da7051b3a","address":"388 Filton Avenue","address line 2":"Bristol","name":"1st Class Pizza","outcode":"BS7","lat":"0", "long":"0", "postcode":"0BE","rating":"4.5","type_of_food":"Pizza", 
            "dishes":[
                {
                  _id: 1,
                  name: "Truffle Mushroom Pizza",
                  price: 14.99,
                  image: "https://img.freepik.com/free-photo/mixed-pizza-chicken-mushroom-bell-peppers-cheese-side-view_140725-9145.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Pizza topped with truffle oil-infused mushrooms and cheese."
                },
                {
                  _id: 2,
                  name: "Sausage and Arugula Pizza",
                  price: 12.99,
                  image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-salami-olives_140725-8753.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Pizza with Italian sausage, fresh arugula, and grated cheese."
                },
                {
                  _id: 3,
                  name: "Margherita with Prosciutto",
                  price: 13.99,
                  image: "https://img.freepik.com/free-photo/slice-crispy-pizza-with-meat-cheese_140725-6974.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Classic margherita pizza topped with thin slices of prosciutto."
                },
                {
                  _id: 4,
                  name: "Pork Pizza",
                  price: 14.99,
                  image: "https://img.freepik.com/premium-photo/traditional-italian-pizza-with-mozzarella-tomato-bacon-selective-focus-copyspace_221774-8624.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Pizza with tangy pork, red onions, and cheese."
                },
                {
                  _id: 5,
                  name: "Pesto Chicken Pizza",
                  price: 13.99,
                  image: "https://img.freepik.com/free-photo/side-view-chicken-pizza-tray-with-salad-table_141793-12982.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Pizza topped with pesto sauce, grilled chicken, and sun-dried tomatoes."
                },
                {
                  _id: 6,
                  name: "Seafood Delight Pizza",
                  price: 16.99,
                  image: "https://img.freepik.com/premium-photo/seafood-pizza-shrimp-mussels-seafood-wooden-background-top-view-free-space-your-text_187166-13282.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Pizza with a variety of seafood like shrimp, crab, and scallops."
                },
                {
                  _id: 7,
                  name: "Four Cheese Pizza",
                  price: 11.99,
                  image: "https://img.freepik.com/free-photo/georgian-cheese-khachapuri-imeruli-georgian-traditional-food-hot-khachapuri_114579-140.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Pizza with a blend of four cheeses like mozzarella, cheddar, gouda, and parmesan."
                },
                {
                  _id: 8,
                  name: "Vegan Veggie Pizza",
                  price: 12.99,
                  image: "https://img.freepik.com/free-photo/closeup-shot-delicious-cheesy-pizza-with-ham-tomatoes-greens-plate_181624-46982.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Vegan pizza with a variety of colorful vegetables and dairy-free cheese."
                },
                {
                  _id: 9,
                  name: "Mediterranean Pizza",
                  price: 14.99,
                  image: "https://img.freepik.com/premium-photo/pizza-with-bacon-chili-empanadas_727023-229.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Pizza with Mediterranean-inspired toppings like olives, feta, and roasted red peppers."
                },
                {
                  _id: 10,
                  name: "Spicy Sausage Pizza",
                  price: 13.99,
                  image: "https://img.freepik.com/free-photo/top-view-pizza-filled-with-tomatoes-colorful-bell-peppers-salami-olives-wooden-board_140725-10375.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Pizza with spicy sausage, jalapenos, and red pepper flakes for a kick."
                }
              ]},
            {"imgUrl":"https://img.freepik.com/premium-photo/delicious-carrot-beef-brisket-casserole_1205-12295.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph","_id":"55f14312c7447c3da7051b87","address":"64 Cowley Road","address line 2":"Mano","name":"A \u0026 T Mundi House","outcode":"OX4","lat":"0", "long":"0", "postcode":"1JB","rating":"4.5","type_of_food":"Arabic", 
            "dishes": [
                {
                  _id: 1,
                  name: "Hummus",
                  price: 7.99,
                  image: "https://img.freepik.com/free-photo/delicious-local-food-dish_23-2148833864.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph",
                  short_description: "Creamy chickpea dip served with olive oil and pita bread."
                },
                {
                  _id: 2,
                  name: "Falafel",
                  price: 6.99,
                  image: "https://img.freepik.com/free-photo/falafel-hummus-pita-middle-eastern-arabic-dishes-halal-food_2829-14312.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=sph",
                  short_description: "Deep-fried chickpea patties, a popular Middle Eastern snack."
                },
                {
                  _id: 3,
                  name: "Shawarma",
                  price: 9.99,
                  image: "https://img.freepik.com/free-photo/side-view-chicken-roll-grilled-chicken-lettuce-cucumber-tomato-mayo-pita_141793-4849.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph",
                  short_description: "Sliced meat wrapped in pita bread with vegetables and tahini sauce."
                },
                {
                  _id: 4,
                  name: "Moutabal",
                  price: 8.99,
                  image: "https://img.freepik.com/premium-photo/jewish-eggplant-dip-with-olive-oil_1472-40699.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph",
                  short_description: "Smoky eggplant dip with tahini and garlic."
                },
                {
                  _id: 5,
                  name: "Kibbeh",
                  price: 10.99,
                  image: "https://img.freepik.com/premium-photo/kibbeh-is-popular-dish-middle-eastern-cuisine-turkish-name-icli-kofte_693630-3302.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph",
                  short_description: "Deep-fried bulgur and minced meat croquettes, a Levantine dish."
                },
                {
                  _id: 6,
                  name: "Mansaf",
                  price: 12.99,
                  image: "https://img.freepik.com/premium-photo/bowl-rice-with-lemon-wedge-side_867452-1225.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph",
                  short_description: "Traditional Jordanian dish of lamb cooked with yogurt and rice."
                },
                {
                  _id: 7,
                  name: "Fatayer",
                  price: 7.99,
                  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Fatayer.jpg/1200px-Fatayer.jpg",
                  short_description: "Savory pastries filled with spinach, cheese, or meat."
                },
                {
                  _id: 8,
                  name: "Tabbouleh",
                  price: 6.99,
                  image: "https://img.freepik.com/free-photo/tabbouleh-salad_2829-10890.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=sph",
                  short_description: "Fresh salad with chopped parsley, tomatoes, and bulgur."
                },
                {
                  _id: 9,
                  name: "Lamb Mandi",
                  price: 14.99,
                  image: "https://img.freepik.com/free-photo/delicious-food-white-plate_144627-34705.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Traditional Yemeni dish of tender lamb and fragrant rice."
                },
                {
                  _id: 10,
                  name: "Baklava",
                  price: 8.99,
                  image: "https://img.freepik.com/free-photo/close-up-turkish-baklava-dessert-made-thin-pastry-nuts-honey_176474-2592.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=sph",
                  short_description: "Sweet pastry made of layers of filo dough, nuts, and syrup."
                }
              ]},
            // {"imgUrl":"https://img.freepik.com/free-photo/delicious-italian-food_1147-165.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph","_id":"55f14312c7447c3da7051bwa","address":"107 King Richards Road","address line 2":"Leicester","name":"Monique's Pizza","outcode":"LE3","lat":"0", "long":"0", "postcode":"5QG","rating":"5","type_of_food":"Pizza"},
            {"imgUrl":"https://img.freepik.com/free-photo/mixed-fried-meat-with-pomegranate-sauce_140725-3461.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=sph","_id":"55f14312c7447c3da7051b50","address":"58 Aurs Drive","address line 2":"Barrhead","name":"Chipshop Barrhead","outcode":"G78","lat":"0", "long":"0", "postcode":"2LW","rating":"4.5","type_of_food":"English", 
            "dishes":[
                {
                  _id: 1,
                  name: "Fish and Chips",
                  price: 11.99,
                  image: "https://img.freepik.com/free-photo/top-view-seafood-appetizers-fish-squid-shrimp-with-sauces-vegetable-salad_141793-4123.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Beer-battered fish served with crispy chips."
                },
                {
                  _id: 2,
                  name: "Full English Breakfast",
                  price: 13.99,
                  image: "https://img.freepik.com/free-photo/tasty-breakfast-meal-composition_23-2148833950.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Hearty breakfast with eggs, bacon, sausages, beans, and more."
                },
                {
                  _id: 3,
                  name: "Shepherd's Pie",
                  price: 12.99,
                  image: "https://img.freepik.com/free-photo/close-up-photo-classic-quiche-lorraine-pie-with-tomatoes_176420-15965.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Savory pie with minced meat and mashed potato topping."
                },
                {
                  _id: 4,
                  name: "Cornish Pasty",
                  price: 8.99,
                  image: "https://img.freepik.com/free-photo/side-view-puff-pastries-with-ground-meat-sesame-seeds-shortcakes-filled-with-mashed-potato-table_141793-5064.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Pastry filled with meat, vegetables, and potatoes."
                },
                {
                  _id: 5,
                  name: "Ploughman's Lunch",
                  price: 9.99,
                  image: "https://img.freepik.com/free-photo/meat-board_1303-9622.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Cold meal with cheese, bread, pickles, and more."
                },
                {
                  _id: 6,
                  name: "Bangers and Mash",
                  price: 10.99,
                  image: "https://img.freepik.com/premium-photo/sausages-mashed-potato_214995-9404.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Sausages served with creamy mashed potatoes and gravy."
                },
                {
                  _id: 7,
                  name: "Cottage Pie",
                  price: 11.99,
                  image: "https://img.freepik.com/free-photo/top-view-syutlach-with-spoon-foil-container_176474-3473.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Similar to Shepherd's Pie, but with minced beef and vegetables."
                },
                {
                  _id: 8,
                  name: "Toad in the Hole",
                  price: 10.99,
                  image: "https://img.freepik.com/free-photo/sausage-dough-sprinkled-with-sesame-seeds-wooden-background-rustic-style_2829-11857.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Sausages baked in Yorkshire pudding batter."
                },
                {
                  _id: 9,
                  name: "Scotch Egg",
                  price: 7.99,
                  image: "https://img.freepik.com/free-photo/boiled-quail-eggs-halves-green-plate_2829-13994.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Hard-boiled egg wrapped in sausage meat and breadcrumbs."
                },
                {
                  _id: 10,
                  name: "Eton Mess",
                  price: 6.99,
                  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Eton_mess_at_Black_Horse_Inn%2C_Nuthurst_West_Sussex_England_2_slightly_different_focus_point.jpg/1200px-Eton_mess_at_Black_Horse_Inn%2C_Nuthurst_West_Sussex_England_2_slightly_different_focus_point.jpg",
                  short_description: "Dessert with meringue, whipped cream, and berries."
                }
              ]},
            // {"imgUrl":"https://img.freepik.com/free-photo/delicious-italian-food_1147-165.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph","_id":"55fv3ad3xzd7447c3da70b4a","address":"22 Eddison Road","address line 2":"Newcastle","name":"2-4-1 Pizza","outcode":"NE38","lat":"0", "long":"0", "postcode":"8JH","rating":"4.5","type_of_food":"Pizza"},
            {"imgUrl":"https://img.freepik.com/free-photo/thai-food-tom-yum-kung-river-prawn-spicy-soup_1150-35451.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=sph","_id":"55f14312c7447c3da7051b29","address":"30 Greyhound Road Hammersmith","address line 2":"London","name":"Zhai ti Kalou","outcode":"W6","lat":"0", "long":"0", "postcode":"8NX","rating":"4.5","type_of_food":"Thai", 
            "dishes":[
                {
                  _id: 1,
                  name: "Tom Yum Goong",
                  price: 13.99,
                  image: "https://img.freepik.com/premium-photo/tom-yam-kung-thai-cuisine-isolated-white_55883-5684.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Spicy and sour shrimp soup with lemongrass and Thai herbs."
                },
                {
                  _id: 2,
                  name: "Green Curry",
                  price: 14.99,
                  image: "https://img.freepik.com/free-photo/thai-food-mackerel-chili-paste-served-with-fried-mackerel-sticky-rice_1150-35230.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Classic Thai curry with green chili paste, coconut milk, and vegetables."
                },
                {
                  _id: 3,
                  name: "Pad Kra Pao",
                  price: 11.99,
                  image: "https://img.freepik.com/free-photo/spicy-minced-pork-rice-black-plate_1150-23732.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Stir-fried minced meat with Thai holy basil and chili, served with rice and a fried egg."
                },
                {
                  _id: 4,
                  name: "Som Tum",
                  price: 9.99,
                  image: "https://img.freepik.com/premium-photo/spicy-green-papaya-salad-with-vegetables_42942-701.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Spicy green papaya salad with tomatoes, peanuts, and lime dressing."
                },
                {
                  _id: 5,
                  name: "Massaman Curry",
                  price: 15.99,
                  image: "https://img.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine_2829-4415.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Rich and flavorful curry with potatoes, peanuts, and tender meat."
                },
                {
                  _id: 6,
                  name: "Pad Thai",
                  price: 12.99,
                  image: "https://img.freepik.com/free-photo/stir-fried-noodle-pork-basil_1339-5606.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Stir-fried rice noodles with shrimp, tofu, peanuts, and tamarind sauce."
                },
                {
                  _id: 7,
                  name: "Khao Pad",
                  price: 10.99,
                  image: "https://img.freepik.com/free-photo/closeup-spicy-cooked-rice-with-meat-vegetables-chips-plate-table_181624-34810.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Thai fried rice with a choice of meat, vegetables, and egg."
                },
                {
                  _id: 8,
                  name: "Gaeng Keow Wan",
                  price: 14.99,
                  image: "https://img.freepik.com/free-photo/fried-noodle-with-pork-soy-sauce-vegetable_1150-27391.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Spicy green curry with tender meat, eggplant, and Thai basil."
                },
                {
                  _id: 10,
                  name: "Pad Prik Khing",
                  price: 12.99,
                  image: "https://i2.wp.com/seonkyounglongest.com/wp-content/uploads/2018/12/Pad-Prik-King-4.jpg?fit=1300%2C732&ssl=1",
                  short_description: "Stir-fried green beans and a choice of meat with flavorful prik khing curry paste."
                }
              ]},
            {"imgUrl":"https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili-top-view_2829-19996.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph","_id":"55f1312c7447hdnw47051bra","address":"88 Manchester Road","address line 2":"Manchester","name":"21 Shishka","outcode":"M34","lat":"0", "long":"0", "postcode":"3PR","rating":"5","type_of_food":"Khebab",
            "dishes": [
                {
                  _id: 1,
                  name: "Beef Seekh Kebab",
                  price: 9.99,
                  image: "https://img.freepik.com/free-photo/beef-shish-kebab-with-hot-chili-sauce_114579-2351.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Spiced minced beef skewers, grilled to perfection."
                },
                {
                  _id: 2,
                  name: "Chicken Shawarma",
                  price: 8.99,
                  image: "https://img.freepik.com/premium-photo/shawarma-rolled-lavash-with-grilled-meat-vegetables-wooden-background_124865-658.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Grilled marinated chicken slices wrapped in pita bread."
                },
                {
                  _id: 3,
                  name: "Lamb Kofta",
                  price: 10.99,
                  image: "https://img.freepik.com/free-photo/delicious-arabic-fast-food-skewers-wooden-board_23-2148651123.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Grilled ground lamb skewers with herbs and spices."
                },
                {
                  _id: 4,
                  name: "Falafel Wrap",
                  price: 7.99,
                  image: "https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-vegetables-black-stone-background_123827-20238.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Freshly made falafel wrapped in pita bread with tahini sauce."
                },
                {
                  _id: 5,
                  name: "Mixed Grill",
                  price: 12.99,
                  image: "https://img.freepik.com/free-photo/front-view-mix-kebab-skewers-with-potatoes-lemon-slices_141793-4643.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Assortment of grilled meats, often including lamb, chicken, and beef."
                },
                {
                  _id: 6,
                  name: "Adana Kebab",
                  price: 11.99,
                  image: "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Spicy minced meat kebab from Turkish cuisine."
                },
                {
                  _id: 7,
                  name: "Doner Kebab",
                  price: 9.99,
                  image: "https://img.freepik.com/free-photo/tendir-doner-with-chicken-table_140725-2443.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Rotating vertical spit of meat, usually served in a pita wrap."
                },
                {
                  _id: 8,
                  name: "Shish Taouk",
                  price: 10.99,
                  image: "https://img.freepik.com/free-photo/flat-lay-mexican-food-composition_23-2148131357.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Marinated chicken cubes grilled on skewers."
                },
                {
                  _id: 9,
                  name: "Shawarma Plate",
                  price: 12.99,
                  image: "https://img.freepik.com/free-photo/from-fried-chicken-pieces-with-lemon-french-fries-salad-wood-plate_176474-2629.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Sliced meat served with rice, salad, and pita bread."
                },
                {
                  _id: 10,
                  name: "Vegetable Kebab",
                  price: 8.99,
                  image: "https://img.freepik.com/premium-photo/grilled-vegetable-chicken-skewers-with-sweet-corn-paprika-zucchini-onion-tomato-mushroom-wooden-plate_633077-2541.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Grilled skewers of assorted vegetables, perfect for vegetarians."
                }
              ]},
            {"imgUrl":"https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?w=1060&t=st=1692927597~exp=1692928197~hmac=786ed46efccb824b798565f31616b161196c4bcc65172662f7fb48823aa3b598","_id":"55f1445y4yh4747c3dj51bua","address":"280 Kilburn High Road","address line 2":"London","name":"280 Degree Nigerian Rest","outcode":"NW6","lat":"0", "long":"0", "postcode":"2BY","rating":"2.5","type_of_food":"African", 
            "dishes":[
                {
                  _id: 1,
                  name: "Suya",
                  price: 12.99,
                  image: "https://img.freepik.com/free-photo/fresh-meat-prepared-fire_144627-34414.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=sph",
                  short_description: "Spicy grilled meat skewers, a popular African street food."
                },
                {
                  _id: 2,
                  name: "Jollof Rice",
                  price: 10.99,
                  image: "https://img.freepik.com/premium-photo/plate-rice-with-duck-leg-greens_141438-286.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Flavorful West African rice dish cooked with tomato sauce and spices."
                },
                {
                  _id: 3,
                  name: "Fufu with Soup",
                  price: 14.99,
                  image: "https://img.freepik.com/free-photo/front-view-bozbash-soup-nude_140725-105493.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Traditional African dish with fufu served with assorted soups."
                },
                {
                  _id: 4,
                  name: "Akara",
                  price: 8.99,
                  image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Acaraje-Baiana.jpg",
                  short_description: "Deep-fried bean cakes, a popular Nigerian snack."
                },
                {
                  _id: 5,
                  name: "Chapati",
                  price: 6.99,
                  image: "https://img.freepik.com/free-photo/close-up-bread-cooked-indian-style_23-2148294972.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=sph",
                  short_description: "Thin unleavened flatbread, commonly eaten in East Africa."
                },
                {
                  _id: 6,
                  name: "Biltong",
                  price: 11.99,
                  image: "https://img.freepik.com/free-photo/wooden-surface-with-traditional-south-african-droewors-with-rosemary-seasoning-it_181624-20183.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph",
                  short_description: "Dried and cured meat strips, a South African delicacy."
                },
                {
                  _id: 7,
                  name: "Efo Riro",
                  price: 9.99,
                  image: "https://lowcarbafrica.com/wp-content/uploads/2019/08/Efo-Riro-IG-2.jpg",
                  short_description: "Nigerian spinach stew cooked with assorted meats and spices."
                },
                {
                  _id: 8,
                  name: "Moin Moin",
                  price: 7.99,
                  image: "https://cheflolaskitchen.com/wp-content/uploads/2022/06/Moin-Moin-20220417-1113_0167-moi-moi-recipe-682x1024.jpg.webp",
                  short_description: "Steamed bean pudding, a Nigerian side dish."
                },
                {
                  _id: 9,
                  name: "Pounded Yam",
                  price: 8.99,
                  image: "https://desirerecipes.com/wp-content/uploads/2022/02/image-24.jpg",
                  short_description: "Smooth and stretchy yam dish, a staple in West African cuisine."
                },
                {
                  _id: 10,
                  name: "Chin Chin",
                  price: 5.99,
                  image: "https://egunsifoods.com/cdn/shop/articles/Chin_Chin.jpg?v=1639595235",
                  short_description: "Crunchy fried pastry snack, popular across Africa."
                }
              ]}
        ]
    },
    {
        id:2,
        type:"featured",
        name:"Tasty Discounts",
        short_description:"Find the discounts everyone has been enjoying!",
        restaurants : [
            {"imgUrl":"https://img.freepik.com/free-photo/tasty-pakistani-dish-flat-lay_23-2148825151.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph","_id":"55f14312c7447c3da7m0513w","address":"470 Vernon Road","address line 2":"Old Basford","name":"1st Class House","outcode":"NG6","lat":"0", "long":"0", "postcode":"0AT","rating":"4","type_of_food":"Arabic", 
            "dishes":[
                {
                  _id: 1,
                  name: "Mansaf",
                  price: 14.99,
                  image: "https://amiraspantry.com/wp-content/uploads/2021/04/mansaf-I.jpg",
                  short_description: "Traditional Jordanian dish of lamb cooked with yogurt and rice."
                },
                {
                  _id: 2,
                  name: "Kibbeh",
                  price: 10.99,
                  image: "https://www.alphafoodie.com/wp-content/uploads/2023/01/Kibbeh-square.jpeg",
                  short_description: "Deep-fried bulgur and minced meat croquettes, a Levantine dish."
                },
                {
                  _id: 3,
                  name: "Moutabal",
                  price: 8.99,
                  image: "https://www.flavourcreations.com.au/wp-content/uploads/elementor/thumbs/3.-Roasted-Egg-Moutaball-without-Shape-It-Crackers-pd4tpvyxavwfr4piodmyek8mmuoupk8q61br1t27wg.jpg",
                  short_description: "Smoky eggplant dip with tahini and garlic."
                },
                {
                  _id: 4,
                  name: "Makloubeh",
                  price: 12.99,
                  image: "https://plantbasedfolk.com/wp-content/uploads/2021/04/Maqlouba.jpg",
                  short_description: "Upside-down spiced rice dish with meat and vegetables."
                },
                {
                  _id: 5,
                  name: "Sfiha",
                  price: 9.99,
                  image: "https://foreignfork.com/wp-content/uploads/2022/09/SfihaFEATURE.jpg",
                  short_description: "Levantine meat pies with a spiced minced meat topping."
                },
                {
                  _id: 6,
                  name: "Fattoush",
                  price: 7.99,
                  image: "https://assets.bonappetit.com/photos/57af6bea53e63daf11a4e565/1:1/w_2560%2Cc_limit/fattoush.jpg",
                  short_description: "Levantine salad with toasted bread, vegetables, and herbs."
                },
                {
                  _id: 7,
                  name: "Lamb Mandi",
                  price: 15.99,
                  image: "https://i0.wp.com/blog.thehealthfinds.com/wp-content/uploads/2022/06/150FE181-CD65-416D-B3C4-4175556D03C3.jpeg?fit=1500%2C2000&ssl=1",
                  short_description: "Traditional Yemeni dish of tender lamb and fragrant rice."
                },
                {
                  _id: 8,
                  name: "Kanafeh",
                  price: 6.99,
                  image: "https://annainthekitchen.com/wp-content/uploads/2021/03/kanfeh-1-735x490.jpg",
                  short_description: "Sweet pastry made of shredded phyllo dough and cheese, soaked in syrup."
                },
                {
                  _id: 9,
                  name: "Chicken Shawarma",
                  price: 11.99,
                  image: "https://www.thespruceeats.com/thmb/3KKZNBkNTZHmnmdZ2BcTNzL_A3k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/simple-chicken-shawarma-recipe-2355394-hero-images-07-6343425bc7ab4e319f21f7690600e556.JPG",
                  short_description: "Marinated and grilled chicken wrapped in pita bread with vegetables and tahini sauce."
                }
              ]},
            {"imgUrl":"https://img.freepik.com/premium-photo/club-sandwich-with-chicken-breast-cheese-tomato-cucumber-herbs_2829-21229.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=sph","_id":"55f14312c7447c3da702242y","address":"137 Yorkshire Street","address line 2":"Oldham","name":"Pine'a'COs","outcode":"OL1","lat":"0", "long":"0", "postcode":"3TH","rating":"5.5","type_of_food":"Dessrts", 
            "dishes":[
                {
                  _id: 1,
                  name: "Chocolate Cake",
                  price: 6.99,
                  image: "https://www.mybakingaddiction.com/wp-content/uploads/2011/10/lr-0938-700x1050.jpg",
                  short_description: "Rich and moist chocolate cake topped with chocolate ganache."
                },
                {
                  _id: 2,
                  name: "Cheesecake",
                  price: 7.99,
                  image: "https://www.marthastewart.com/thmb/m6R1D2iuHvVxM8u7RJz7c-Us8Rg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSL-865202-new-york-cheesecake-hero-horiz-0723-84e3c796119d408581d1ef4d02d801cd.jpg",
                  short_description: "Creamy and indulgent cheesecake with a graham cracker crust."
                },
                {
                  _id: 3,
                  name: "Tiramisu",
                  price: 8.99,
                  image: "https://i.shgcdn.com/269063bf-d72d-41dd-b848-9b30657696e6/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
                  short_description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream."
                },
                {
                  _id: 4,
                  name: "Fruit Tart",
                  price: 5.99,
                  image: "https://img.freepik.com/premium-photo/tart-with-strawberries-whipped-cream-decorated-with-mint-leaves_2829-13286.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Butter pastry crust filled with pastry cream and fresh fruits."
                },
                {
                  _id: 5,
                  name: "Ice Cream Sundae",
                  price: 4.99,
                  image: "https://img.freepik.com/free-photo/side-view-white-ice-cream-scoops-topped-with-chocolate-nuts-vase-wooden-table_140725-10350.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Scoop of ice cream with various toppings, whipped cream, and a cherry on top."
                },
                {
                  _id: 6,
                  name: "Panna Cotta",
                  price: 6.99,
                  image: "https://img.freepik.com/free-photo/delicious-thai-food-still-life_23-2149508924.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Italian dessert of sweetened cream set with gelatin, often served with fruit coulis."
                },
                {
                  _id: 7,
                  name: "Macarons",
                  price: 9.99,
                  image: "https://img.freepik.com/free-photo/front-view-french-macarons-colorful-cakes-white-surface-cake-pie-sugar-bake-biscuit-sweet-cookies_140725-53106.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph",
                  short_description: "Delicate and colorful French cookies with a creamy filling."
                },
                {
                  _id: 8,
                  name: "Creme Brulee",
                  price: 7.99,
                  image: "https://img.freepik.com/free-photo/creme-brulee_144627-16744.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Creamy custard with a caramelized sugar crust on top."
                },
                {
                  _id: 9,
                  name: "Churros",
                  price: 5.99,
                  image: "https://img.freepik.com/free-photo/traditional-mexican-dessert-churros-with-chocolate-top-view_114579-7315.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=sph",
                  short_description: "Fried dough pastry dusted with cinnamon sugar, often served with chocolate sauce."
                },
                {
                  _id: 10,
                  name: "Molten Lava Cake",
                  price: 8.99,
                  image: "https://img.freepik.com/free-photo/delicious-chocolate-roll-arrangement_23-2150645378.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Warm chocolate cake with a gooey chocolate center, often served with vanilla ice cream."
                }
              ]},
            // {"imgUrl":"https://img.freepik.com/free-photo/top-view-pizza-stand-with-tomatoes-olives-bell-peppers-black-table_141793-13175.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph","_id":"55f14312c7447c3da7051b3w","address":"70 Carter Lane","address line 2":"Mansfield","name":"Pace Pizza","outcode":"NG18","lat":"0", "long":"0", "postcode":"3DH","rating":"4.5","type_of_food":"Pizza"},
            {"imgUrl":"https://generatorfun.com/code/uploads/Random-Food-image-14.jpg","_id":"55f14312c7447c1a71414tgw","address":"19 Regent Street","address line 2":"Hinckley","name":"223 Place","outcode":"LE10","lat":"0", "long":"0", "postcode":"0AZ","rating":"5.5","type_of_food":"Italian", 
            "dishes":[
                {
                  _id: 1,
                  name: "Margherita Pizza",
                  price: 10.99,
                  image: "https://ohsweetbasil.com/wp-content/uploads/four-cheese-margherita-pizza-recipe-12-scaled.jpg",
                  short_description: "Classic pizza with tomato, mozzarella, and basil."
                },
                {
                  _id: 2,
                  name: "Spaghetti Carbonara",
                  price: 12.99,
                  image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg",
                  short_description: "Pasta dish with eggs, cheese, pancetta, and black pepper."
                },
                {
                  _id: 3,
                  name: "Risotto Milanese",
                  price: 14.99,
                  image: "https://www.sipandfeast.com/wp-content/uploads/2023/02/risotto-alla-milanese-recipe-snippet-3.jpg",
                  short_description: "Creamy saffron-flavored rice dish, a specialty of Milan."
                },
                {
                  _id: 4,
                  name: "Bruschetta",
                  price: 8.99,
                  image: "https://img.freepik.com/free-photo/sandwich-with-sundried-tomato-tasty-snack-concept_185193-109854.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph",
                  short_description: "Toasted bread topped with tomatoes, garlic, basil, and olive oil."
                },
                {
                  _id: 5,
                  name: "Lasagna",
                  price: 13.99,
                  image: "https://img.freepik.com/premium-photo/classic-lasagna-with-bolognese-sauce_2829-16541.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph",
                  short_description: "Layered pasta dish with meat, cheese, and béchamel sauce."
                },
                {
                  _id: 6,
                  name: "Margherita Pasta",
                  price: 11.99,
                  image: "https://www.littlebroken.com/wp-content/uploads/2021/07/Margherita-Pasta-12.jpg",
                  short_description: "Pasta dish with tomatoes, mozzarella, basil, and olive oil."
                },
                {
                  _id: 7,
                  name: "Tiramisu",
                  price: 9.99,
                  image: "https://img.freepik.com/free-photo/carrot-cake-with-white-frosting-carrot-top_123827-23482.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph",
                  short_description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream."
                },
                {
                  _id: 8,
                  name: "Fettuccine Alfredo",
                  price: 15.99,
                  image: "https://img.freepik.com/free-photo/fettucine-white-cream-sauce-with-shrimp-mushroom_1203-9007.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                  short_description: "Creamy pasta dish with butter, cream, and Parmesan cheese."
                },
                {
                  _id: 9,
                  name: "Caprese Salad",
                  price: 7.99,
                  image: "https://img.freepik.com/premium-photo/caprese-salad-with-tomato-mozzarella-basil_437222-3788.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                  short_description: "Salad with tomatoes, mozzarella, basil, olive oil, and balsamic glaze."
                },
                {
                  _id: 10,
                  name: "Gelato",
                  price: 6.99,
                  image: "https://img.freepik.com/free-photo/ice-cream-cone_144627-41490.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph",
                  short_description: "Italian ice cream with rich flavors and a smooth texture."
                }
              ]},
            {"imgUrl":"https://img.freepik.com/free-photo/high-angle-chicken-meal_23-2148825122.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph","_id":"55f14312c7447c3da7025266","address":"2 Station Approach","address line 2":"Upminster","name":" 69|Spice","outcode":"RM14","lat":"0", "long":"0", "postcode":"2TH","rating":"5.5","type_of_food":"Curry", 
            "dishes":[
                {
                  _id: 1,
                  name: "Chicken Tikka Masala",
                  price: 14.99,
                  image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-masala.jpg",
                  short_description: "Grilled chicken in a rich tomato-based curry sauce."
                },
                {
                  _id: 2,
                  name: "Paneer Butter Masala",
                  price: 12.99,
                  image: "https://www.indianveggiedelight.com/wp-content/uploads/2017/09/instant-pot-paneer-butter-masala-featured.jpg",
                  short_description: "Soft paneer cubes in a creamy and buttery tomato-based curry."
                },
                {
                  _id: 3,
                  name: "Beef Rendang",
                  price: 15.99,
                  image: "https://www.kitchensanctuary.com/wp-content/uploads/2018/01/Beef-Rendang-square-FS-28.jpg",
                  short_description: "Indonesian spicy meat dish slow-cooked in coconut milk and spices."
                },
                {
                  _id: 4,
                  name: "Aloo Gobi",
                  price: 9.99,
                  image: "https://veganhuggs.com/wp-content/uploads/2021/04/aloo-gobi-in-bowl-side-view.jpg",
                  short_description: "Classic Indian dish with potatoes and cauliflower in a fragrant curry."
                },
                {
                  _id: 5,
                  name: "Thai Green Curry",
                  price: 13.99,
                  image: "https://www.thecookingcollective.com.au/wp-content/uploads/2023/05/Thai-green-chicken-curry-3.jpg",
                  short_description: "Spicy and aromatic curry with green chili paste and coconut milk."
                },
                {
                  _id: 6,
                  name: "Lamb Korma",
                  price: 16.99,
                  image: "https://simply-delicious-food.com/wp-content/uploads/2010/04/Lamb-Korma-curry-2-2-500x500.jpg",
                  short_description: "Mild and creamy curry with tender pieces of lamb and nuts."
                },
                {
                  _id: 7,
                  name: "Dal Makhani",
                  price: 10.99,
                  image: "https://myfoodstory.com/wp-content/uploads/2018/08/Dal-Makhani-New-3.jpg",
                  short_description: "Creamy lentil curry slow-cooked with butter and spices."
                },
                {
                  _id: 9,
                  name: "Chana Masala",
                  price: 11.99,
                  image: "https://www.indianveggiedelight.com/wp-content/uploads/2019/05/chana-masala-recipe-featured.jpg",
                  short_description: "Spiced chickpea curry with aromatic spices."
                },
                {
                  _id: 10,
                  name: "Egg Curry",
                  price: 8.99,
                  image: "https://www.foodandwine.com/thmb/w6sObjY6jMfz57-PrG1NwMVyaMA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Keralan-Egg-Curry-FT-RECIPE1021-62581259e7654b0ca3be00885845b592.jpg",
                  short_description: "Hard-boiled eggs in a flavorful curry sauce."
                }
              ]},
            // {"imgUrl":"https://img.freepik.com/free-photo/delicious-goulash-stew-table_23-2149371741.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph","_id":"55f14312c7447c3da727748w","address":"1776 Coventry Road","address line 2":"Birmingham","name":"Treat U","outcode":"B26","lat":"0", "long":"0", "postcode":"1PB","rating":"5.5","type_of_food":"Masala",
            // "dishes":[
            //     {
            //       _id: 1,
            //       name: "Chicken Tikka",
            //       price: 12.99,
            //       image: "chicken_tikka.jpg",
            //       short_description: "Marinated and grilled chicken pieces, a popular Indian appetizer."
            //     },
            //     {
            //       _id: 2,
            //       name: "Garam Masala",
            //       price: 6.99,
            //       image: "garam_masala.jpg",
            //       short_description: "A fragrant spice blend used to add depth to various dishes."
            //     },
            //     {
            //       _id: 3,
            //       name: "Masala Chai",
            //       price: 4.99,
            //       image: "masala_chai.jpg",
            //       short_description: "Spiced tea made with black tea, milk, and a blend of aromatic spices."
            //     },
            //     {
            //       _id: 4,
            //       name: "Vegetable Biryani",
            //       price: 11.99,
            //       image: "vegetable_biryani.jpg",
            //       short_description: "Flavorful rice dish cooked with aromatic spices and mixed vegetables."
            //     },
            //     {
            //       _id: 5,
            //       name: "Chicken Curry",
            //       price: 13.99,
            //       image: "chicken_curry.jpg",
            //       short_description: "Classic Indian curry with tender chicken pieces in a rich spiced sauce."
            //     },
            //     {
            //       _id: 6,
            //       name: "Pav Bhaji",
            //       price: 8.99,
            //       image: "pav_bhaji.jpg",
            //       short_description: "Spicy mashed vegetable curry served with soft bread rolls."
            //     },
            //     {
            //       _id: 7,
            //       name: "Masala Dosa",
            //       price: 9.99,
            //       image: "masala_dosa.jpg",
            //       short_description: "Thin rice crepe filled with spiced potato mixture, often served with chutneys."
            //     },
            //     {
            //       _id: 8,
            //       name: "Paneer Tikka Masala",
            //       price: 14.99,
            //       image: "paneer_tikka_masala.jpg",
            //       short_description: "Grilled paneer in a creamy tomato-based curry sauce."
            //     },
            //     {
            //       _id: 9,
            //       name: "Samosa",
            //       price: 5.99,
            //       image: "samosa.jpg",
            //       short_description: "Crispy pastry filled with spiced potatoes and peas, a popular snack."
            //     },
            //     {
            //       _id: 10,
            //       name: "Dal Tadka",
            //       price: 7.99,
            //       image: "dal_tadka.jpg",
            //       short_description: "Tempered yellow lentil soup with aromatic spices."
            //     }
            //   ]},
            {"imgUrl":"https://img.freepik.com/free-photo/chicken-nuggets_2829-11173.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=sph","_id":"55f14312c3uc3da948qgqgqg","address":"317 Wilmslow Road","address line 2":"Fallowfield","name":"23rd Street Cuzz","outcode":"M14","lat":"0", "long":"0", "postcode":"6NW","rating":"5","type_of_food":"American",
            "dishes": [
                {
                _id: 1,
                name: "BBQ Ribs",
                price: 16.99,
                image: "https://img.freepik.com/premium-photo/grilled-pork-ribs-with-spices-vegetables-wooden-background_181303-3693.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                short_description: "Slow-cooked ribs glazed with smoky barbecue sauce."
                },
                {
                _id: 2,
                name: "Cheeseburger",
                price: 12.99,
                image: "https://img.freepik.com/free-photo/delicious-homemade-sandwich-ketchup-fries-chicken-nuggets-black-board-gray-surface_179666-42499.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=sph",
                short_description: "Classic American cheeseburger with all the fixings."
                },
                {
                _id: 3,
                name: "Chicken Wings",
                price: 10.99,
                image: "https://img.freepik.com/premium-photo/fried-chicken-wings-glazed-honey-sauce_127425-788.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                short_description: "Crispy fried chicken wings tossed in a variety of sauces."
                },
                {
                _id: 4,
                name: "Mac and Cheese",
                price: 9.99,
                image: "https://img.freepik.com/free-photo/macaroni-with-cheese-chicken-mushrooms-baked-oven_2829-11122.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                short_description: "Creamy macaroni and cheese topped with breadcrumbs."
                },
                {
                _id: 5,
                name: "Caesar Salad",
                price: 8.99,
                image: "https://img.freepik.com/free-photo/top-view-homemade-delicious-salad-with-many-ingredients-plate-black-green-mix-colors-background_179666-20005.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais",
                short_description: "Romaine lettuce, croutons, and Caesar dressing with Parmesan cheese."
                },
                {
                _id: 6,
                name: "Buffalo Chicken Sandwich",
                price: 11.99,
                image: "https://img.freepik.com/premium-photo/sandwich-with-cheese-tomato-cucumber-sausage-salad-wood_114173-31.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                short_description: "Spicy buffalo chicken breast served in a bun with lettuce and ranch dressing."
                },
                {
                _id: 7,
                name: "Onion Rings",
                price: 6.99,
                image: "https://img.freepik.com/free-photo/fried-rings-with-sweet-chili_140725-3764.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                short_description: "Crispy battered onion rings served with dipping sauce."
                },
                {
                _id: 8,
                name: "Mushroom Swiss Burger",
                price: 13.99,
                image: "https://img.freepik.com/free-photo/side-view-beef-fitburger-black-bun-with-vegetable-salad_141793-4767.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                short_description: "Beef patty topped with sautéed mushrooms and Swiss cheese."
                },
                {
                _id: 9,
                name: "New York Cheesecake",
                price: 7.99,
                image: "https://img.freepik.com/free-photo/classic-cheesecake-with-strawberry-cherry-slices_140725-3241.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                short_description: "Rich and creamy cheesecake topped with fruit compote."
                },
                {
                _id: 10,
                name: "Steak Fries",
                price: 5.99,
                image: "https://img.freepik.com/free-photo/meat-burger-wooden-board-french-fries-side-view_141793-2388.jpg?size=626&ext=jpg&ga=GA1.1.1924136682.1692927585&semt=ais",
                short_description: "Thick-cut seasoned fries served with ketchup and aioli."
                }
            ]}
        ]
    }
]


export {data, featured}
