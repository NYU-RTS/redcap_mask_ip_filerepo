<?php

namespace NYU\MaskIPFileRepoModule;

use ExternalModules\AbstractExternalModule;

class MaskIPFileRepoModule extends AbstractExternalModule {
    
    function redcap_every_page_top($project_id = null) {
        $page = defined("PAGE") ? PAGE : "";
        if ($page == "FileRepositoryController:index") {
            $this->initializeJavascriptModuleObject();
            $this->includeJs("js/handleAction.js");
        }
    }
      
    function redcap_module_ajax($action, $payload, $project_id) {
        $response = [
            "metadata" => [],
            "errors" => []
        ];
        if($action == "loaded"){
            $response["metadata"] = "Page loaded";
        }
        else{
            $response["errors"][] = "Unknown ajax action!";
        }
        return $response;
    }

    protected function includeJs($file) {
        echo '<script src="' . $this->getUrl($file) . '"></script>';
    }
}
