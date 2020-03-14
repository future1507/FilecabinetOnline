<?php
ini_set('display_errors',1);
error_reporting(E_ALL);

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

//  Serach All  //
//http://localhost:80/Webservice/products
$app->get('/products', function (Request $request, Response $response, array $args) {
    $conn = $GLOBALS['dbconn'];
    $sql = "select * from products";
    $result = $conn->query($sql);
    //$num = $result->num_rows;
    $data = array();
    while ($row = $result->fetch_assoc()) {
        array_push($data,$row);
    }
    $json = json_encode($data);
    $response->getBody()->write($json);
    return $response->withHeader('Content-Type', 'application/json');
});
//

// Search follow id   //
//http://localhost:80/Webservice/productsCode/S10_1678
$app->get('/productsCode/{product_code}', function (Request $request, Response $response, array $args) {
    $pCode = $args['product_code'];
    $conn = $GLOBALS['dbconn'];
    $sql = "select * from products";
    $result = $conn->query($sql);
    $data = array();

    $found = 'false';
    while ($row = $result->fetch_assoc()) {
        if (strpos($row['productCode'], $pCode) !== false) {
            $found = 'true';
        }
        else{
            $found = 'false';
        }
        if ($found == 'true') {
            array_push($data,$row);
        }
        
    }
    $json = json_encode($data);
    $response->getBody()->write($json);
    return $response->withHeader('Content-Type', 'application/json');
});
//

//  Search follow name  //
//http://localhost:80/Webservice/productsName/1952 Alpine Renault 1300
$app->get('/productsName/{name}', function (Request $request, Response $response, array $args) {
    $pName = $args['name'];
    $conn = $GLOBALS['dbconn'];
    $sql = "select * from products";
    $result = $conn->query($sql);
    $data = array();

    $found = 'false';
    while ($row = $result->fetch_assoc()) {
        if (strpos($row['productName'], $pName) !== false) {
            $found = 'true';
        }
        else{
            $found = 'false';
        }
        if ($found == 'true') {
            array_push($data,$row);
        }
        
    }
    $json = json_encode($data);
    $response->getBody()->write($json);
    return $response->withHeader('Content-Type', 'application/json');
});
//

// Insert //
$app->post('/addproducts', function (Request $request, Response $response, array $args) {
    $body = $request->getBody();
    $bodyArry = json_decode($body,true);

    $conn = $GLOBALS['dbconn'];
    $stmt = $conn->prepare("insert into products ".
    " (productCode,productName,productLine,productScale,productVendor, ".
    " productDescription,quantityInStock,buyPrice,MSRP) ".
    " values (?,?,?,?,?,?,?,?,?)");
    $stmt->bind_param("ssssssidd",
    $bodyArry['productCode'], $bodyArry['productName'], $bodyArry['productLine'],
    $bodyArry['productScale'], $bodyArry['productVendor'], $bodyArry['productDescription'],
    $bodyArry['quantityInStock'], $bodyArry['buyPrice'], $bodyArry['MSRP']);
  
    $stmt->execute();
    $result = $stmt->affected_rows;

    $response->getBody()->write($result."");
    return $response->withHeader('Content-Type', 'application/json');
});
//

// Delete follow id   //
//http://localhost:80/Webservice/deleteproducts/S10_1000
$app->get('/deleteproducts/{product_code}', function (Request $request, Response $response, array $args) {
    $pCode = $args['product_code'];
    $conn = $GLOBALS['dbconn'];
    $stmt = $conn->prepare('delete from products where productCode = ?');
    $stmt->bind_param("s",$pCode);
    $stmt->execute();

    $result = $stmt->affected_rows;
    $response->getBody()->write($result."");
    return $response->withHeader('Content-Type', 'application/json');
});
//

// Update //
$app->post('/updateproducts', function (Request $request, Response $response, array $args) {
    $body = $request->getBody();
    $bodyArry = json_decode($body,true);

    $conn = $GLOBALS['dbconn'];
    $stmt = $conn->prepare("update products ".
    "set productName = ?,productLine = ?,productScale = ?,productVendor = ?,".
    "productDescription = ?,quantityInStock = ?,buyPrice = ?,MSRP = ?  ".
    "where productCode = ?");
    $stmt->bind_param("sssssidds",
     $bodyArry['productName'], $bodyArry['productLine'],
    $bodyArry['productScale'], $bodyArry['productVendor'], $bodyArry['productDescription'],
    $bodyArry['quantityInStock'], $bodyArry['buyPrice'], $bodyArry['MSRP'],$bodyArry['productCode']);
  
    $stmt->execute();
    $result = $stmt->affected_rows;

    $response->getBody()->write($result."");
    return $response->withHeader('Content-Type', 'application/json');
});
//



?>