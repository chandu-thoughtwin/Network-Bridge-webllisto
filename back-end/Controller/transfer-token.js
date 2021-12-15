// Importing database schema
let TransferToken = require('../mongoSchema/networkBridgeSchema.js')


const getTransferTokenS = async (req, res) =>{
    try{
      const FindTransferToken = await TransferToken.find();
      res.json(FindTransferToken);

    }
    catch(err){
      res.json({message : err});
    }
  }

const createTransferToken = async(req,res)=>{
    try{

     let  formData = {

            fromToken: req.body.fromToken,
            
            toToken:req.body.toToken,

            
            fromAddress: req.body.fromAddress,
            
            toAddress: req.body.toAddress,
            
            amount: req.body.amount,
            
            nonce : req.body.nonce,
            
            timeStamp: req.body.timeStamp,
            
            transactionHash:req.body.transactionHash,
            
            Status : req.body.Status
        }

        let HashFromUi = req.body.transactionHash;
        console.log('hash>>>>****>>>>',HashFromUi)
        let  transactionHashInDb =  await  TransferToken.findOne({transactionHash:HashFromUi});
        console.log('hash>>>>>>>>',transactionHashInDb);


        if(transactionHashInDb===null){
           console.log('IF CONDITION');
            let postTransferToken = new TransferToken(formData)
        
            let postData = await postTransferToken.save();
            res.json(postData);
        }
        else {
            console.log("ELSE CONDITION!!");
            transactionHashInDb.fromToken = req.body.fromToken,
            transactionHashInDb.toToken = req.body.toToken,
            transactionHashInDb.fromAddress = req.body.fromAddress,
            transactionHashInDb.toAddress = req.body.toAddress,
            transactionHashInDb.amount = req.body.amount,
            transactionHashInDb.nonce = req.body.nonce,
            transactionHashInDb.timeStamp = req.body.timeStamp,
            transactionHashInDb.transactionHash = req.body.transactionHash,
            transactionHashInDb.Status = req.body.Status

            transactionHashInDb.save()
            res.json(transactionHashInDb);

        }
        }
    catch(err){
        res.json({message:'error',err});
        console.log('Error',err);
    }

  };

const getTokenTransfer = async (req, res) => {
    try{
    // const { _id }= req.params;

        const TokenDetailsById = await TransferToken.findById( req.params.id);
        res.json(TokenDetailsById);
    }
    catch(err){
        res.json({message: err});
    }
  };

const deleteTransferToken = (async(req,res)=>{
    try{
        const removeTokenById = await TransferToken.deleteMany({_id:req.params.id});
        res.json(removeTokenById);
    }catch{
        res.json({message: err});

    }
  });

const updateTransferToken =  async(req,res)=>{
    try{
        const updateTokenById = await TransferToken.updateMany(
            { _id: req.params.id },
            { $set: {fromToken: req.body.fromToken, toToken: req.body.toToken, fromAddress:req.body.fromAddress, toAddress: req.body.toAddress,amount: req.body.amount, nonce: req.body.nonce, timeStamp: req.body.timeStamp, transactionHash:req.body.transactionHash, Status : req.body.Status
            }},

        );
        res.json(updateTokenById);
        }catch(err){
            res.json({ message:err });
        }
    };


    module.exports = {getTransferTokenS, createTransferToken, getTokenTransfer, deleteTransferToken, updateTransferToken};