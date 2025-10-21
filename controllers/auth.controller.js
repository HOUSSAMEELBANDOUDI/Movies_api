import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {User} from "../models/index.js";
import { generateToken } from "../utils/helpers.js";

export async function register(req, res){

    const user = await User.findOne({where: { email: req.body.email }});
    if (user){
        res.status(400).json( {message: "User already exist"});
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    const token = generateToken(newUser.id);

    res.status(201).json({
        token,
        user: {
            id: newUser.id,
            name: newUser.name

        }
     });
}

export async function login(req, res){

    const user = await User.findOne({where: { email: req.body.email }});
    if (!user){
        res.status(404).json( {message: "email or password are wrong"});
    }

    const isValidPssword = await bcrypt.compare(req.body.password, user.password);
     if (!isValidPssword){
        res.status(404).json( {message: "email or password are wrong"});
    }
    const token = generateToken(user.id);
    res.json({ token });
}

export async function getCurrentUser(req, res){

    const user = await User.findByPk(req.user.id);
    if (!user){
        res.status(404).json( {message: "User Not Found"});
    }

    res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email

     });
}

    
