import bidModel from "../models/bidModel.js";

export default class BiddingController {
    async bidding(req, res) {
        const { itemID, userID, bid } = req.body;
        const data = await bidModel.create({
            item: itemID,
            user: userID,
            bid
        });
        if (data) {
            res.json({ success: true, message: "Bid Stored In Database" })
        }
    }

    async getHighestBid(req, res) {
        const { itemid } = req.params;
        const data = await bidModel.findAll({
            where: {
                item: itemid
            },
            order: [['bid', 'DESC']], // Order by bidValue in descending order
        })
            .then((highestBid) => {
                if (highestBid) {
                    // highestBid contains the bid with the highest value for the specified item
                    console.log('Highest Bid:', highestBid);
                } else {
                    console.log('No bids found for the specified item.');
                }
                res.json({data: highestBid[0]})

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    async deleteBids(req, res){
        const {item} = req.params
        try{
            const data = bidModel.destroy({
                where:{
                    item
                }
            });
            if (data){
                res.json({success: true, message: "Bids deleted"})
            }else{
                res.json({success: false, message: "Cannot Delete Bids"})
            }
        }catch(err){
            console.log(err);
            res.json({success: false, message: `Error Deleting Bids ${err}`})
        }
    }
}