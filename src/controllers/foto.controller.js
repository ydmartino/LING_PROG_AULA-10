import { validationResult } from 'express-validator'
import Foto from '../models/foto.model.js'

export default class fotoController{
    static async index(req, res) {
        const fotos = await Foto.findMany()
        res.json(fotos)
    }
    static async create(req, res){
        //array de erros
        const erros = validationResult(req)
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() })
        }

        const foto = await Foto.create({
            data:req.body
        })
        res.json(Foto)
    }
}