# Project detail
## Name
Darsh Protocol

## About
Darsh's mission is to create a socialized way of lending and borrowing while maintaining DeFi's autonomy and permissionlessness by offering a decentralized peer to peer way for any individual to engage as a lender or borrower.

Our main goal is to provide an efficient and sustainable way for lenders to maximize their rewards on supplied asset by enabling them the ability to structure their loan terms while also removing the risk of an unexpected liquidation of a borrower's collateralized loan all being settled on-chain in a fully decentralized manner.

## Links
[dorahacks](https://dorahacks.io/buidl/5270) | [trondao forum](https://forum.trondao.org/t/overview-of-the-darsh-protocol-project/17488)

## Deployed Smart Contracts on BTTC Testnet


LoanManager
https://testscan.bt.io/#/contract/0x25037e173bf89840Cc9C4759AD84cE49D2491889

OfferManager
https://testscan.bt.io/#/contract/0x695AA92b100257197D1999b9b5E4369200c93bc5

FeeManager
https://testscan.bt.io/#/contract/0x80dd771AEDA02D104E694eBd887F9Ad9D84Efaac

PriceFeed
https://testscan.bt.io/#/contract/0x96AA6c58fF5c65F5AA62CF4C4cBc6E290aE59564

Activity
https://testscan.bt.io/#/contract/0x411D0757289D25BFfFad52AA78896C431c5A6a63

DarshScore
https://testscan.bt.io/#/contract/0xF190FC925C999C2302B46b275A85C7A0EA10eC40

LoanToValueRatio
https://testscan.bt.io/#/contract/0x827a8674F3065FD686a68857D8AA5380ea294293

LendingPool
https://testscan.bt.io/#/contract/0x0725a33f555197adc2eff28476f347b751c3e69d



# Flow diagram
![Loan Diagram](https://user-images.githubusercontent.com/123966451/222807924-377c0485-182d-468a-a16c-978bd75d9317.png)
[view full flow diagram](https://www.figma.com/file/iqIY47PfSbBb0W6fQH835c/Darsh-Flow-Charts?node-id=0%3A1&t=C66NhTmJgB4HB12L-0)

## Features

**Terms Structuring:** Lenders are enabled to create offers with sets of predetermined loan terms, specifying the principal amount and asset type (ERC20), Collateral types, Loan duration, interest rate demanded to be met by a potential borrower.

**Asset Vaulting:** the principal supplied by a Lender is locked into a principal vault accessible to the lender anytime. The vault serves as a decentralized escrow between a lender and borrowers.

**On-Chain matching:** loan offers funded by lenders are matched and settled with a borrower once countersigned, all happening seamlessly with all transactions recorded and fully verifiable on-chain.

**Loan Managing:** on approving and creating a loan offer, lenders are assigned the full authority to a created loan offer of actions like settling borrow requests, repayments claiming, asset vault management all achievable on-chain.

**Offer Bidding:** on a lend loan offer, borrowers are allowed to directly request for a borrow loan offer with loan terms relative to the lend loan initially offered by a lender.

**Permissionless Borrowing:** principals can be borrowed by borrowers permissionlessly from a lend loan offer created by a lender, once the loan terms demanded are met.

**Customed Repayment:** loan repayments are ease for borrowers to reassess their collateralized asset anytime once repaid. Repayments can be paid in proportions or once within the loan duration specified.

[learn more](https://darshprotocol.gitbook.io/product-docs)

## LendingPool contract
The LendingPool contract is the main point of interaction with the DARSH protocol's market.

 > Users can:
 - Create Lending/Borrowing offers
 - Request for new terms on offers
 - Repay (Fully/Installment)
 - Claim principal and earnings
 - Claim back collateral
 - Cancel/Reject/Accept requests
 - and more.

 > Admin can:
 - Liquidate matured loans
 - Withdraw accrued fees
 - Change owner
 - Update configs
 

## Supported tokens
![ftm](https://user-images.githubusercontent.com/123966451/222814337-c1378fdd-3dd5-4e57-9e1f-b8a9d830f91f.png)
![eth](https://user-images.githubusercontent.com/123966451/222814336-3cb5e554-a981-4ff8-86f6-ea7b4f6f1e2d.png)
![usdt](https://user-images.githubusercontent.com/123966451/222814331-f617e15b-8ae9-4c36-a6c9-7ad50c400348.png)
![btc](https://user-images.githubusercontent.com/123966451/222814332-2954a827-153d-492c-97c6-6a1a49715b8f.png)
![dai](https://user-images.githubusercontent.com/123966451/222814334-d291e5d5-0932-4ea4-85ae-e91323f2745c.png)
![usdc](https://user-images.githubusercontent.com/123966451/222814326-154b1313-b1bd-412c-92c6-3a451988293f.png)

## Governance [Coming soon]

![darsh](https://user-images.githubusercontent.com/123966451/222815877-9c242f12-2477-4396-88c5-709d848c4f3b.png)

| **Darsh Token** | **DSH** |

This ensures the protocol can rapidly adjust to changing market conditions, as well as update core parts of the protocol as time goes on.

DARSH token holders will receive governance powers proportionally to their balance.

The governance power which is used to vote for or against existing proposals, and gives access to creating and sustaining a proposal.

## Revenue model
A platform fee of 5% will be deducted from interests paid by borrowers.
> More revenue models will be introduced as we grow and unlock more use cases to our users.

## Sneak peaks
![Desktop - 100 (1)](https://user-images.githubusercontent.com/123966451/222903210-45840f83-0d05-440b-a555-925f38325b50.png)
![Desktop - 102](https://user-images.githubusercontent.com/123966451/222903213-1e17b8cc-4cf8-49e4-b87d-dec96e7050ef.png)
![Desktop - 83](https://user-images.githubusercontent.com/123966451/222903216-c726512a-c815-4fa8-b533-0fe76bca9f13.png)

[checkout full demo here](https://darshprotocol.netlify.app)

## Development
Create a `.env` like the `.env-example` and update with valid keys and mnemonic/phrase or private key

 - Compile contracts

> truffle compile

- Migrate contracts

> truffle migrate --network testnet

- Set configs

> truffle test --network testnet

- Run test

> truffle test --network testnet

- Verify contracts

> truffle verify --network=testnet <contracts> --license=MIT

- Run frontend
> npm run dev
 
- Start node backend
> npm run start

## Stacks
 | Smart contract | Frontend | Backend | Design | Cloud services |
 |--|--|--| -- |--|
 | Truffle and plugins | Vuejs | Expressjs | Figma | Netlify |
 |Web3js|Web3js|Web3js||Render|
 ||Covalent API| Moralis Stream|||
 ||Jazzicon|Mongodb|||


## Languages
- Solidity
- Javascript
- HTML/CSS

## Dependencies
- Chainlink Price Feed
- Openzeppelin

