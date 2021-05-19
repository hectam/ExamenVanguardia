using FinancialApp.Core.Entities;
using FinancialApp.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace FinancialApp.Core.Services
{
	public class AccountService : IAccountService
	{
		private readonly IRepository<Account> accountRepository;
		

		public AccountService(IRepository<Account> accountRepository, IRepository<Transaction> transactionRepository)
		{
			this.accountRepository = accountRepository;
			
		}
		public ServiceResult<IReadOnlyList<Account>> GetAccounts()
		{
			var accounts = accountRepository.Get();
			return ServiceResult<IReadOnlyList<Account>>.SuccessResult(accounts);
		}

		public ServiceResult<Account> UpdateAccount(int id, Account t)
		{
			var accounts = accountRepository.Update(id);

			return ServiceResult<Account>.SuccessResult(accounts);
		}
	}
}
