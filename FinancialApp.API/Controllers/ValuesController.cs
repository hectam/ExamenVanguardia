using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FinancialApp.API.Models;
using FinancialApp.Core.Entities;
using FinancialApp.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FinancialApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
		private readonly ITransactionService transactionService;
		private readonly IAccountService accountService;

		public ValuesController(ITransactionService transactionService, IAccountService accountService)
		{
			this.transactionService = transactionService;
			this.accountService = accountService;
		}
        // GET api/values
        [HttpGet("resumen/income")]
        public ActionResult<double> GetIncome()
        {

            var transaction = transactionService.GetTransactions()
            .Result.Select(x => new TransactionDto
            {
                Amount = x.Amount
                
            });

            double Income=0;

            foreach(TransactionDto plus in transaction)
			{
				if (plus.Amount > 0) {
                    Income += plus.Amount;
                }

			}

            return Ok(Income);
			

        }

        [HttpGet("resumen/expense")]
        public ActionResult<double> GetExpenses()
        {

            var transaction = transactionService.GetTransactions()
            .Result.Select(x => new TransactionDto
            {
                Amount = x.Amount

            });

            double Expense = 0;

            foreach (TransactionDto plus in transaction)
            {
                if (plus.Amount < 0)
                {
                    Expense += plus.Amount;
                }

            }

            return Ok(Expense);


        }

        [HttpGet("resumen/total")]
        public ActionResult<double> GetTotal()
        {

            var transaction = transactionService.GetTransactions()
            .Result.Select(x => new TransactionDto
            {
                Amount = x.Amount

            });

            double Expense = 0;

            foreach (TransactionDto plus in transaction)
            {
              
                    Expense += plus.Amount;

            }

            return Ok(Expense);


        }

        [HttpGet("cuentas")]

        public ActionResult<AccountDto> GetCuentas()
        {

            var account = accountService.GetAccounts()
            .Result.Select(x => new AccountDto
            {
                Amount = x.Amount,
                Name = x.Name

            }) ;


            return Ok(account);


        }


        [HttpGet("transacciones")]

        public ActionResult<TransactionDto> GetTransacciones()
        {

            var transaction = transactionService.GetTransactions()
           .Result.Select(x => new TransactionDto{
               Description =x.Description,
               AccountId = x.AccountId,
               Amount = x.Amount,
               TransactionDate = x.TransactionDate
            }
            );

            var listed = new List<TransactionDto>();

            int check = 0;

            foreach (TransactionDto plus in transaction)
            {

                int test =  transaction.Count()- check;
                if( test < 5)
				{
                    listed.Add(plus);
				}
                check++;

            }

            return Ok(listed);


        }

        [HttpPost]

        public ActionResult<Transaction> PostTransaction([FromBody] Transaction t)
        {



            var transaction = transactionService.Create(t);
           
            

            return Ok(transaction);


        }









    }
}
