var ejs = require("ejs");
var mysql = require('./mysql');

function signin(req,res) {

	ejs.renderFile('./views/login.ejs',function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}


function afterSignIn(req,res)
{
	// check user already exists
	var getUser="select * from adminlogin where name='" + req.param("username")
	+ "' AND password='" + req.param("password") + "'";
	console.log("Query is:"+getUser);
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
			}
		else 
		{
			if(results.length > 0){
				console.log("valid Login");
				//recording login time
				//localStorage.setItem('currentLoginTime', Date());
				//res.redirect('/successSignIn');
				
				res.send({"login":"Success"});
				}
			else {    
				
				console.log("Invalid Login");
				res.send({"login":"Fail"});
			}
		}  
	},getUser);
}

function dashboard(req,res) {

	ejs.renderFile('./views/index2.ejs',function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}

function signout(req,res) {

	ejs.renderFile('./views/login.ejs',function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}

function highmap(req,res) {

	ejs.renderFile('./views/highmap.ejs',function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}

function chart(req,res) {

	ejs.renderFile('./views/chart.ejs',function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}
function populartoppings(req,res) {

	ejs.renderFile('./views/toppingschart.ejs',function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}

function getData(req,res)
{
	// check user already exists
	var getLikes="select password from adminlogin where name='likes'";
	console.log("Query is:"+getLikes);
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
			}
		else 
		{
			var getCount="select password from adminlogin where name='count'";
			console.log("Query is:"+getCount);
			
			mysql.fetchData(function(err,countResults) {

					if(err){
						throw err;
					}
					else{
						var getSales = "select sum(cost) as sale from orderinfo";
						console.log("Query is:"+getSales);
						mysql.fetchData(function(err,salesResults) {

								if(err){
									throw err;
								}
								else{
									var getOrders = "select count(*) as wcount from customerinfo";
									console.log("Query is:"+getOrders);
									mysql.fetchData(function(err,orderResults) {

										if (!err) {
											console.log("Got data successfully");	
												
												res.send({"likes":JSON.stringify(results),"count":JSON.stringify(countResults), "sales":JSON.stringify(salesResults),"orders":JSON.stringify(orderResults)});	
												//res.end(result);
											}
											// render or error
											else {
												res.end('An error occurred');
												console.log(err);
											}
										}, getOrders);
							}
						}, getSales);
					}
				}, getCount);
			}
		},getLikes);
}


function toppingData(req,res){
	var getOnions="select count(*) as Onions from orderinfo where topping1='Onions' or topping2='Onions' or topping3='Onions' or topping4='Onions' or topping5='Onions' or topping6='Onions' or topping7='Onions' or topping8='Onions'";
	console.log("Query is:"+getOnions);
	
	mysql.fetchData(function(err,Onionresults){
		if(err){
			throw err;
			}
		else 
		{
			var getMushrooms="select count(*) as Mushrooms from orderinfo where topping1='Mushrooms' or topping2='Mushrooms' or topping3='Mushrooms' or topping4='Mushrooms' or topping5='Mushrooms' or topping6='Mushrooms' or topping7='Mushrooms' or topping8='Mushrooms'";
			console.log("Query is:"+getMushrooms);
			
			mysql.fetchData(function(err,Mushroomresults){
				if(err){
					res.end('An error occurred');
					console.log(err);
					}
				else 
				{					
					var getPep="select count(*) as Pepperoni from orderinfo where topping1='Pepperoni' or topping2='Pepperoni' or topping3='Pepperoni' or topping4='Pepperoni' or topping5='Pepperoni' or topping6='Pepperoni' or topping7='Pepperoni' or topping8='Pepperoni'";
					console.log("Query is:"+getPep);
					
					mysql.fetchData(function(err,Pepresults){
						if(err){
							throw err;
							}
						else 
						{
							var getHam="select count(*) as Ham from orderinfo where topping1='Ham' or topping2='Ham' or topping3='Ham' or topping4='Ham' or topping5='Ham' or topping6='Ham' or topping7='Ham' or topping8='Ham'";
							console.log("Query is:"+getHam);
							
							mysql.fetchData(function(err,Hamresults){
								if(err){
									throw err;
									}
								else 
								{
									var getBacon="select count(*) as Bacon from orderinfo where topping1='Bacon' or topping2='Bacon' or topping3='Bacon' or topping4='Bacon' or topping5='Bacon' or topping6='Bacon' or topping7='Bacon' or topping8='Bacon'";
									console.log("Query is:"+getBacon);
									
									mysql.fetchData(function(err,Baconresults){
										if(err){
											throw err;
											}
										else 
										{
											var getPin="select count(*) as Pineapple from orderinfo where topping1='Pineapple' or topping2='Pineapple' or topping3='Pineapple' or topping4='Pineapple' or topping5='Pineapple' or topping6='Pineapple' or topping7='Pineapple' or topping8='Pineapple'";
											console.log("Query is:"+getPin);
											
											mysql.fetchData(function(err,Pinresults){
												if(err){
													throw err;
													}
												else 
												{
													var getOli="select count(*) as Olives from orderinfo where topping1='Olives' or topping2='Olives' or topping3='Olives' or topping4='Olives' or topping5='Olives' or topping6='Olives' or topping7='Olives' or topping8='Olives'";
													console.log("Query is:"+getOli);
													
													mysql.fetchData(function(err,Oliresults){
														if(err){
															throw err;
															}
														else 
														{
															var getTom="select count(*) as Tomatoes from orderinfo where topping1='Tomatoes' or topping2='Tomatoes' or topping3='Tomatoes' or topping4='Tomatoes' or topping5='Tomatoes' or topping6='Tomatoes' or topping7='Tomatoes' or topping8='Tomatoes'";
															console.log("Query is:"+getTom);
															
															mysql.fetchData(function(err,Tomresults){
																if(err){
																	throw err;
																	}
																else 
																{
																	var getJal="select count(*) as Jalapeno from orderinfo where topping1='Jalapeno' or topping2='Jalapeno' or topping3='Jalapeno' or topping4='Jalapeno' or topping5='Jalapeno' or topping6='Jalapeno' or topping7='Jalapeno' or topping8='Jalapeno'";
																	console.log("Query is:"+getJal);
																	
																	mysql.fetchData(function(err,Jalresults){
																		if(err){
																			throw err;
																			}
																		else 
																		{
																			var getGP="select count(*) as GreenPeppers from orderinfo where topping1='GreenPeppers' or topping2='GreenPeppers' or topping3='GreenPeppers' or topping4='GreenPeppers' or topping5='GreenPeppers' or topping6='GreenPeppers' or topping7='GreenPeppers' or topping8='GreenPeppers'";
																			console.log("Query is:"+getGP);
																			
																			mysql.fetchData(function(err,GPresults){
																				if(err){
																					throw err;
																					}
																				else 
																				{
																					var getChes="select count(*) as Cheese from orderinfo where topping1='Cheese' or topping2='Cheese' or topping3='Cheese' or topping4='Cheese' or topping5='Cheese' or topping6='Cheese' or topping7='Cheese' or topping8='Cheese'";
																					console.log("Query is:"+getChes);
																					
																					mysql.fetchData(function(err,Chesresults){
																						if(err){
																							throw err;
																							}
																						else 
																						{
																							res.send({"Onions":JSON.stringify(Onionresults),"Mushrooms":JSON.stringify(Mushroomresults), "Pepperoni":JSON.stringify(Pepresults), "Ham":JSON.stringify(Hamresults), "Bacon":JSON.stringify(Baconresults), "Pineapple":JSON.stringify(Pinresults), "Olives":JSON.stringify(Oliresults), "Tomatoes":JSON.stringify(Tomresults), "Jalapeno":JSON.stringify(Jalresults), "GreenPeppers":JSON.stringify(GPresults), "Cheese":JSON.stringify(Chesresults)});
																						}
																					},getChes);
																				}
																			},getGP);
																		}
																	},getJal);
																}
															},getTom);
														}
													},getOli);
												}
											},getPin);
										}
									},getBacon);
								}
							},getHam);
							
						}
					},getPep);
				}
			},getMushrooms);
		}
	},getOnions);
}

function highmapdata(req,res)
{
	var getmapdata="select count(*) as SC from customerinfo where city='Santa Clara' and state='CA'";
	console.log("Query is:"+getmapdata);
	
	mysql.fetchData(function(err,results){
		if(err){
				res.end('An error occurred');;
			}
		else 
		{
			res.send({"SC":JSON.stringify(results)});
		}
	},getmapdata);
}
function vnvchart(req,res){
	ejs.renderFile('./views/vegnvegchart.ejs',function(err, result) {
		   // render on success
		   if (!err) {
		            res.end(result);
		   }
		   // render or error
		   else {
		            res.end('An error occurred');
		            console.log(err);
		   }
	   });
}

function getvnv(req,res)
{
	var getveg="select count(*) as veg from orderinfo where vegnv='v'";
	console.log("Query is:"+getveg);
	
	mysql.fetchData(function(err,Vegresults){
		if(err){
			throw err;
			}
		else 
		{
			var getnv="select count(*) as nveg from orderinfo where vegnv='nv'";
			console.log("Query is:"+getnv);
			
			mysql.fetchData(function(err,NVegresults){
				if(err){
						res.end('An error occurred');
					}
				else 
				{
					res.send({"Veg":JSON.stringify(Vegresults), "NVeg":JSON.stringify(NVegresults)});
				}
			},getnv);
		}
	},getveg);
}


exports.signin=signin;
exports.afterSignIn=afterSignIn;
exports.dashboard=dashboard;
exports.signout=signout;
exports.highmap=highmap;
exports.chart=chart;
exports.populartoppings=populartoppings;
exports.getData=getData;
exports.toppingData=toppingData;
exports.highmapdata=highmapdata;
exports.vnvchart=vnvchart;
exports.getvnv=getvnv;