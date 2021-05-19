using FinancialApp.Core.Entities;
using FinancialApp.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace FinancialApp.Core.Services
{
	public class TransactionService : ITransactionService
	{
		
		private readonly IRepository<Transaction> transactionRepository;

		public TransactionService(IRepository<Transaction> transactionRepository)
		{
			
			this.transactionRepository = transactionRepository;
		}

		public ServiceResult<Transaction> Create(Transaction t)
		{
			var trans = transactionRepository.Create(t);

			return ServiceResult<Transaction>.SuccessResult(trans);
		}

		public ServiceResult<IReadOnlyList<Transaction>> GetTransactions()
		{
			var trans = transactionRepository.Get();

			return ServiceResult<IReadOnlyList<Transaction>>.SuccessResult(trans);
		}

		
	}
}
