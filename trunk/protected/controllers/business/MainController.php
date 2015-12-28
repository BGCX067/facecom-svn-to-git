<?php

class MainController extends Controller {

    public $layout = 'advert';

    public function init() {
        Yii::app()->clientScript->registerPackage('main');
    }

    public function actionIndex()
	{
		Yii::app()->clientScript->registerPackage('business');
		$this->render('/business/index', array());

	}

}