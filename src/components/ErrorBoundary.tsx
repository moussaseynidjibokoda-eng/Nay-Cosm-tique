import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Nayé Cosmétique - Erreur d\'affichage :', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#160D08] text-[#FBF6EE] flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full p-8 rounded-3xl bg-[#26160E] border border-[#C9A24B]/30 shadow-2xl">
            <div className="font-serif-luxury text-3xl font-bold text-[#C9A24B] mb-2">
              NAYÉ COSMÉTIQUE
            </div>
            <p className="text-xs uppercase tracking-widest text-[#FBF6EE]/60 mb-6">
              Maison de beauté sahélienne
            </p>
            <p className="text-sm text-[#FBF6EE]/80 mb-6 leading-relaxed">
              Une mise à jour de l'affichage est en cours. Cliquez ci-dessous pour actualiser le site.
            </p>
            <button
              type="button"
              onClick={() => {
                window.location.href = window.location.origin + window.location.pathname;
              }}
              className="px-6 py-3 rounded-full bg-[#C9A24B] text-[#160D08] font-semibold text-xs uppercase tracking-wider hover:bg-[#DFC07A] transition-colors shadow-lg cursor-pointer"
            >
              Actualiser le site
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
