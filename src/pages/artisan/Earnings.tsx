import React from 'react';
import {
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Building2,
  ShieldCheck,
  Clock } from
'lucide-react';
import { mockEarningsSummary, mockTransactions } from '../../data/mockData';
import { useScreenInit } from '../../useScreenInit';
export function ArtisanEarnings() {
  useScreenInit();
  return (
    <div className="h-full w-full bg-background flex flex-col">
      <div className="px-6 pt-6 pb-4 border-b border-slate-100 bg-white z-10">
        <h1 className="text-xl font-bold text-text">Earnings</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Balance Cards */}
        <div className="bg-primary rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <p className="text-primary-light text-sm font-medium mb-1">
            Available Balance
          </p>
          <h2 className="text-4xl font-bold mb-4">
            ₦{mockEarningsSummary.availableBalance.toLocaleString()}
          </h2>
          <button className="w-full bg-white text-primary font-bold py-3 rounded-xl shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
            <Wallet size={18} /> Withdraw Funds
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
            <div className="flex items-center gap-1 text-amber-700 text-xs font-bold mb-1">
              <ShieldCheck size={14} /> IN ESCROW
            </div>
            <div className="text-xl font-bold text-amber-900">
              ₦{mockEarningsSummary.pendingBalance.toLocaleString()}
            </div>
            <p className="text-[10px] text-amber-700/80 mt-1">
              Pending job completion
            </p>
          </div>
          <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-4">
            <div className="text-text-muted text-xs font-bold mb-1">
              TOTAL EARNED
            </div>
            <div className="text-xl font-bold text-text">
              ₦{mockEarningsSummary.totalEarnings.toLocaleString()}
            </div>
            <p className="text-[10px] text-text-muted mt-1">
              Lifetime earnings
            </p>
          </div>
        </div>

        {/* Bank Account */}
        <section>
          <h3 className="text-sm font-bold text-text mb-3">
            Withdrawal Account
          </h3>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                <Building2 size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-text">GTBank</h4>
                <p className="text-xs text-text-muted">**** 1234</p>
              </div>
            </div>
            <button className="text-primary text-xs font-bold">Edit</button>
          </div>
        </section>

        {/* Transaction History */}
        <section>
          <h3 className="text-sm font-bold text-text mb-3">
            Recent Transactions
          </h3>
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
            {mockTransactions.map((tx, idx) =>
            <div
              key={tx.id}
              className={`p-4 flex items-center gap-3 ${idx !== mockTransactions.length - 1 ? 'border-b border-slate-100' : ''}`}>
              
                <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${tx.type === 'credit' ? 'bg-green-50 text-green-600' : tx.type === 'withdrawal' ? 'bg-slate-100 text-slate-600' : 'bg-red-50 text-red-600'}`}>
                
                  {tx.type === 'credit' ?
                <ArrowDownRight size={20} /> :

                <ArrowUpRight size={20} />
                }
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-text truncate">
                    {tx.description}
                  </p>
                  <p className="text-xs text-text-muted">{tx.date}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p
                  className={`text-sm font-bold ${tx.type === 'credit' ? 'text-green-600' : 'text-text'}`}>
                  
                    {tx.type === 'credit' ? '+' : '-'}₦
                    {tx.amount.toLocaleString()}
                  </p>
                  {tx.status === 'pending' &&
                <span className="text-[10px] font-bold text-amber-600 flex items-center justify-end gap-0.5 mt-0.5">
                      <Clock size={10} /> Escrow
                    </span>
                }
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>);

}