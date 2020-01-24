<?php

namespace AchMandate;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class AchMandateServiceProvider extends ServiceProvider {

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__ . '/../config/ach-mandate.php', 'ach-mandate'
        );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerRoutes();

        $this->registerViews();
    }

    private function registerRoutes()
    {
        Route::group($this->routeConfiguration(), function () {
            $this->loadRoutesFrom(__DIR__ . '/../routes/web.php');
        });

        Route::group($this->apiRouteConfiguration(), function () {
            $this->loadRoutesFrom(__DIR__ . '/../routes/api.php');
        });
    }

    private function apiRouteConfiguration()
    {
        return [
            'prefix' => config('ach-mandate.api-path'),
        ];
    }

    private function registerViews()
    {
        $this->loadViewsFrom(
            __DIR__ . '/../resources/views', 'ach-mandate'
        );
    }

    private function routeConfiguration()
    {
        return [
            'namespace' => 'AchMandate\Http\Controllers',
            'prefix'    => config('ach-mandate.path'),
            'middleware'    => 'web',
        ];
    }
}