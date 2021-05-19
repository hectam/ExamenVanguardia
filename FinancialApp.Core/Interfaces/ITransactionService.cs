using FinancialApp.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace FinancialApp.Core.Interfaces
{
	public interface ITransactionService
	{
		ServiceResult<IReadOnlyList<Transaction>> GetTransactions();

		ServiceResult<Transaction> Create(Transaction t);

	}
}
