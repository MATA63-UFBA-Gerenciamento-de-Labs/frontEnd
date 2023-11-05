

function Login() {

  return <div className="LoginFullCentro" style={{ width: '100vw', height: '100vh', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div className="Surface" style={{ width: '100%', height: '100%', position: 'absolute', background: '#0C326F' }}></div>
  <div className="LoginArea" style={{ width: '427px', height: '416px', position: 'absolute', background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <div className="FontType" style={{width: 254, height: 88, paddingTop: 28, paddingBottom: 20, left: 89, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
      <div className="Text" style={{color: 'black', fontSize: 29.30, fontFamily: 'Rawline', fontWeight: '500', wordWrap: 'break-word'}}>Acesso ao sistema</div>
    </div>
    <div className="Input" style={{width: 384, height: 90, left: 24, top: 96, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
      <div className="ContentBase" style={{alignSelf: 'stretch', height: 63, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div className="FontType" style={{paddingBottom: 4, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
          <div className="Text" style={{color: 'black', fontSize: 14, fontFamily: 'Rawline', fontWeight: '600', wordWrap: 'break-word'}}>Número de Matrícula</div>
        </div>
        <div className="Content" style={{alignSelf: 'stretch', height: 40, paddingTop: 4, paddingBottom: 4, paddingLeft: 16, paddingRight: 4, background: 'white', borderRadius: 4, border: '1px #888888 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
          <div className="Icon" style={{width: 20, height: 16, textAlign: 'center', color: '#888888', fontSize: 16, fontFamily: 'Font Awesome 5 Free', fontWeight: '900', wordWrap: 'break-word'}}>user</div>
          <div className="FontType" style={{flex: '1 1 0', height: 27, paddingTop: 4, paddingBottom: 4, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div className="Text" style={{flex: '1 1 0', color: '#333333', fontSize: 14, fontFamily: 'Rawline', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>Ex. 999 999 999 99</div>
          </div>
          <div className="Button" style={{width: 32, height: 32, position: 'relative', borderRadius: 16}}>
            <div className="Container" style={{width: 40, height: 40, left: -4, top: -4, position: 'absolute', borderRadius: 9999}} />
            <div className="Text" style={{width: 20, left: 6, top: 7, position: 'absolute', textAlign: 'center', color: '#1351B4', fontSize: 16, fontFamily: 'Font Awesome 5 Free', fontWeight: '900', wordWrap: 'break-word'}}>Eye</div>
          </div>
        </div>
      </div>
      <div className="FontType" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div className="Text" style={{color: 'black', fontSize: 14, fontFamily: 'Rawline', fontWeight: '400', wordWrap: 'break-word'}}>Digite somente números</div>
      </div>
    </div>
    <div className="Input" style={{width: 384, height: 90, left: 24, top: 210, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
      <div className="ContentBase" style={{alignSelf: 'stretch', height: 63, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div className="FontType" style={{paddingBottom: 4, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
          <div className="Text" style={{color: 'black', fontSize: 14, fontFamily: 'Rawline', fontWeight: '600', wordWrap: 'break-word'}}>Senha</div>
        </div>
        <div className="Content" style={{alignSelf: 'stretch', height: 40, paddingTop: 4, paddingBottom: 4, paddingLeft: 16, paddingRight: 4, background: 'white', borderRadius: 4, border: '1px #888888 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
          <div className="Icon" style={{width: 20, height: 16, textAlign: 'center', color: '#888888', fontSize: 16, fontFamily: 'Font Awesome 5 Free', fontWeight: '900', wordWrap: 'break-word'}}>lock</div>
          <div className="FontType" style={{flex: '1 1 0', height: 27, paddingTop: 4, paddingBottom: 4, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div className="Text" style={{flex: '1 1 0', color: '#333333', fontSize: 14, fontFamily: 'Rawline', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}> </div>
          </div>
          <div className="Button" style={{width: 32, height: 32, position: 'relative', borderRadius: 16}}>
            <div className="Container" style={{width: 40, height: 40, left: -4, top: -4, position: 'absolute', borderRadius: 9999}} />
            <div className="Text" style={{width: 20, left: 6, top: 7, position: 'absolute', textAlign: 'center', color: '#1351B4', fontSize: 16, fontFamily: 'Font Awesome 5 Free', fontWeight: '900', wordWrap: 'break-word'}}>Eye</div>
          </div>
        </div>
      </div>
      <div className="FontType" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div className="Text" style={{color: 'black', fontSize: 14, fontFamily: 'Rawline', fontWeight: '400', wordWrap: 'break-word'}}>Digite sua senha de segurança</div>
      </div>
    </div>
    <div className="FontType" style={{width: 107, height: 17, paddingBottom: 16, left: 24, top: 308, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
      <div className="Text" style={{color: '#1351B4', fontSize: 11.67, fontFamily: 'Rawline', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word'}}>Esqueceu a senha?</div>
    </div>
    <div className="Button" style={{width: 384, height: 39, paddingLeft: 24, paddingRight: 24, paddingTop: 8, paddingBottom: 8, left: 24, top: 349, position: 'absolute', background: '#1351B4', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
      <div className="Text" style={{textAlign: 'center', color: 'white', fontSize: 16.80, fontFamily: 'Rawline', fontWeight: '600', wordWrap: 'break-word'}}>Entrar</div>
    </div>
  </div>
  <div className="FontType" style={{paddingBottom: 4, left: 451, top: 626, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
    <div className="Text" style={{color: 'white', fontSize: 11.67, fontFamily: 'Rawline', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word'}}>Política de privacidade</div>
  </div>
  <div className="FontType" style={{paddingBottom: 4, left: 733, top: 626, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
    <div className="Text" style={{textAlign: 'right', color: 'white', fontSize: 11.67, fontFamily: 'Rawline', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word'}}>Precisa de ajuda?</div>
  </div>
</div>
}

export default Login;
