﻿using System;
using System.Collections.Generic;
using System.Text;

namespace FinancialApp.Core.Enum
{
    public enum ResponseCode
    {
        Success,
        Error,
        InternalServerError = 500,
        NotFound
    }
}