<?php

namespace CoreBundle\Controller;

use CoreBundle\Entity\Product;
use CoreBundle\Form\ProductType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ProductController extends Controller
{
    public function indexAction(Request $request)
    {
        $product = new Product();
        $form = $this->createForm(new ProductType(), $product);
        $productLists = $this->getDoctrine()->getRepository('CoreBundle:Product')->getAll();
//        var_dump($projectRepository);die;
        return $this->render('CoreBundle:Product:form.html.twig',array(
            'form' => $form->createView(),
            'productLists'=>$productLists
        ));

    }

    public function productListAction()
    {
        $productLists = $this->getDoctrine()->getRepository('CoreBundle:Product')->getAll();


        foreach($productLists as $productList)
        {
            $values[] = array(
                'id' => $productList->getId(),
                'name' => $productList->getName(),
                'description' => $productList->getDescription(),
                'quantity' => $productList->getQuantity(),
                'price' => $productList->getPrice(),
                'status' => $productList->getStatus(),
            );

        }
        return new Response(json_encode($values));
    }
}
