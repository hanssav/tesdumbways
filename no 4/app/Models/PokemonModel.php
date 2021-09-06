<?php

namespace App\Models;

use CodeIgniter\Model;

class PokemonModel extends Model
{
    protected $table = 'pokemon_tb';
    protected $useTimestamps = true;
}
