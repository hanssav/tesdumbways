<?php

namespace App\Controllers;

use App\Models\PokemonModel;
use CodeIgniter\Controller;

class Hello extends Controller
{
    protected $pokemonModel;

    public function __construct()
    {
        $this->pokemonModel = new pokemonModel();
    }

    public function index()
    {
        $pokemon = $this->pokemonModel->FindAll();

        dd($pokemon);

        return view('home');
    }
}
